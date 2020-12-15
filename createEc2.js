//import { returnEc2InstanceParameters } from './src/parameters/createEC2InstanceParameters'

const AWS = require('aws-sdk')
const fs = require('fs');
const sleep = require('util').promisify(setTimeout)

const configuration = JSON.parse(fs.readFileSync('jmod_config.json'))
let ec2Configuration = configuration.ec2Configuration
let awsConfiguration = configuration.awsConfiguration


const credentials = { accessKeyId: configuration.awsConfiguration.accessKeyId, secretAccessKey: configuration.awsConfiguration.secretAccessKey, region: configuration.awsConfiguration.region }

//const startupScript = require('./src/scripts/startup')
const ec2parambuilder = require('./src/parameters/createEC2InstanceParameters')
const shellCommandParameters = require('./src/parameters/sendCommandShellParameters')
const waitForRunningParameters = require('./src/parameters/waitForRunningParameters')




//var ec2 = new AWS.EC2( accessKeyId, secretAccessKey);
var ec2 = new AWS.EC2(credentials);
var ssm = new AWS.SSM(credentials);

var keyName = ec2Configuration.keyName
var testId = 1;

//var encodedStartupScript = Buffer.from(startupScript.toString()).toString('base64')
try {
    //var params = ec2parambuilder.returnEc2InstanceParameters('1', 't2.micro', 'ami-0ce1e3f77cd41957e', 'JmeterOdSSM', 'JOD', '', 2, keyName)
    var params = ec2parambuilder.create(ec2Configuration)
} catch (error) {
    throw error
}

/********************/
/****execute main****/
/********************/
main()

/********************/
/******functions*****/
/********************/
async function main() {

    //main functionaility
    try {
        let keyPairExists = await checkIfKeyPairExists()
        if (!keyPairExists) {
            console.log('KeyPair does not exist yet. Creating a new one. You will find the private key under <key pair name>.txt in the root folder.')
            await createKeyPair()
        }
        let instanceReservationInfo = await createEc2Instances()
        let instanceIds = instanceReservationInfo.Instances.map(instance => instance.InstanceId)
        await waitForCreate(instanceIds).then(data => fs.writeFileSync('instances-' + testId + '.json', JSON.stringify(data, null, 2)))
        let ssmEnabled = false
            // TODO remove while loop for retries
        while (!ssmEnabled) {
            console.log('Waiting for machine to be manageable through AWS SSM.')
            await sleep(5000)
            ssmEnabled = await checkSsmInstanceStatus(instanceIds)
        }
        await configureStepOne(instanceIds)
    } catch (error) {
        console.log(error)
    }
}

// building block functions
async function createKeyPair() {
    console.log('Creating Key Pair')
    let promise = ec2.createKeyPair({ KeyName: keyName }).promise()
        .then(response => { return fs.writeFileSync(keyName + '.txt', response.KeyMaterial) });
    await promise
    console.log('Successfully created Key Pair')
}

async function checkIfKeyPairExists() {
    console.log('Looking for existing Key Pair with name ' + keyName)
    let promise = ec2.describeKeyPairs({ KeyNames: [keyName] }).promise()
        .then(response => { console.log('Found a matching Key Pair.'); return true }).catch(error => { return false })
    let keyPairExists = await promise
    return keyPairExists
}

async function deleteKeyPair() {
    console.log('Deleting Key Pair')
    let promise = ec2.deleteKeyPair({ KeyName: keyName }).promise()
        .then(response => { return console.log(response) })
    await promise
    console.log('Successfully deleted Key Pair')
}

async function createEc2Instances() {
    console.log('Starting creation')
    let creationPromise = ec2.runInstances(params).promise()
        .then(response => {
            return response
        })
    let instances = await creationPromise
    console.log('Successfully triggered instance creation.')
    return instances
}

async function waitForCreate(instanceIds) {
    console.log('Waiting for instances with the following IDs to be in state "Running"')
    console.log(instanceIds)
    return await ec2.waitFor('instanceRunning', { InstanceIds: instanceIds }, function(err, data) {
        if (err) console.log(err, err.stack);
        else {
            //fs.writeFileSync('instances-' + testId + '.json', JSON.stringify(data, null, 2));
            console.log('Instances are running. Information has been saved to instances-' + testId + '.json')
            return data
        }
    }).promise();
}
async function checkSsmInstanceStatus(instanceIds) {
    let promise = ssm.describeInstanceInformation({ Filters: [{ Key: 'InstanceIds', Values: instanceIds }] }).promise()
        .then(response => {
            if (response.InstanceInformationList.length < 1) { return false } else {
                console.log('Instances are now manageable through AWS SSM')
                return true
            }
        })

    let isRegisteredBySsm = await promise
    return isRegisteredBySsm
}

async function configureStepOne(instanceIds) {
    console.log(shellCommandParameters.create(instanceIds))

    let ssmPromise = ssm.sendCommand(shellCommandParameters.create(instanceIds)).promise()
        .then(response => {
            console.log('Preparing instances for Jmeter testing')
            console.log(response.Command.CommandId)
        })
        .catch(err => { console.log(err) });
    await ssmPromise;

    /*
    let ssmWaitPromises = [];
     array.forEach(element => {
         
     });
     ssmWaitPromises.push(ssm.waitFor(shellCommandParameters).promise()
         .then(response => {
             console.log('Preparing instances for Jmeter testing')
             console.log(response)
         })
         .catch(err => { console.log(err) }));
     await Promise.all(ssmWaitPromises); */

    return 'exiting'
};









// add specific IP adresses 

/*Install Jmeter*/