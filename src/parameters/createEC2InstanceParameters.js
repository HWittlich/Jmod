const startupScript = require('../scripts/startup')

function returnEc2InstanceParameters(configuration) {
    validateInput(configuration)
        //console.log(startupScript.createStartupScript(configuration.terminateInstancesAfterXMinutes).toString())
    var encodedStartupScript = Buffer.from(startupScript.createStartupScript(configuration.terminateInstancesAfterXMinutes).toString()).toString('base64')
    return {
        MaxCount: configuration.instanceCount ? configuration.instanceCount : '1',
        /* required */
        MinCount: configuration.instanceCount ? configuration.instanceCount : '1',
        /* required */
        InstanceType: configuration.instanceType ? configuration.instanceType : 't2.small',
        ImageId: configuration.imageId ? configuration.imageId : 'ami-0ce1e3f77cd41957e',
        IamInstanceProfile: {
            //Arn: 'STRING_VALUE',
            Name: configuration.iamInstanceProfileName // The role should have SSM (for configuring) and S3 (for downloading non public)
        },
        SecurityGroups: [
            configuration.securityGroups,
            /* more items */
        ],
        KeyName: (configuration.keyName && configuration.keyName !== "") ? configuration.keyName : "JmodCreatedKey",
        UserData: encodedStartupScript,
        InstanceInitiatedShutdownBehavior: 'terminate',
        TagSpecifications: [{
            ResourceType: 'instance', //client-vpn-endpoint | customer-gateway | dedicated-host | dhcp-options | egress-only-internet-gateway | elastic-ip | elastic-gpu | export-image-task | export-instance-task | fleet | fpga-image | host-reservation | image | import-image-task | import-snapshot-task | instance | internet-gateway | key-pair | launch-template | local-gateway-route-table-vpc-association | natgateway | network-acl | network-interface | placement-group | reserved-instances | route-table | security-group | snapshot | spot-fleet-request | spot-instances-request | subnet | traffic-mirror-filter | traffic-mirror-session | traffic-mirror-target | transit-gateway | transit-gateway-attachment | transit-gateway-multicast-domain | transit-gateway-route-table | volume | vpc | vpc-peering-connection | vpn-connection | vpn-gateway | vpc-flow-log,
            Tags: [{
                    Key: 'Hagen',
                    Value: '1'
                },
                {
                    Key: 'Jmeter',
                    Value: ''
                },
            ]
        }, ],
    }
}

function validateInput(configuration) {
    if (configuration.instanceCount < 1) {
        throw 'The parameter "instanceCount" is not a valid number.'
    }
    if (configuration.instanceType === null || undefined) {
        throw 'The parameter instanceType is not specified.'
    }
    if (configuration.imageId == null || undefined) {
        'The parameter imageId is not specified.'
    }

    if (configuration.securityGroups === null || undefined) {
        throw 'The parameter securityGroups is not specified.'
    }
    if (configuration.iamInstanceProfileName === null || undefined) {
        throw 'The parameter iamInstanceProfileName is not specified.'
    }
    //if (tags == null || undefined) {throw 'The parameter tags is not specified.'}
    if (configuration.terminateInstancesAfterXMinutes < 1 || undefined) {
        throw 'The parameter "terminateAfterXMinutes" is not a valid number.'
    }

}

module.exports.create = returnEc2InstanceParameters;