# Jmod - Jmeter on demand

Jmod is a tool developed to easily enable everyone to run automated, scalable load tests.

While Jmod was originally created for the load test tool JMeter (LINK needed), in the future it may as well support other tools as well.

Creating scalable load tests, even involving millions of concurrent connections can be handled through this tool.

## Prerequisites

To successfully run this project, you need:
* Node.js / npm installed
* An AWS Account (what is the additional structure needed? S3, Roles, Sec Groups)

## Step-By-Step Setup

### AWS Setup
1. Create IAM User "JmodUser" (What permissions are needed? SSM, EC2, S3)
2. Create a Role "JmeterOdSSM" for machines (SSM, S3)
3. Create a Security Group (SSH in/out, HTTP?)

### Local Setup
1. Clone the repository
2. in the root directory run `npm install`

## Configuration
All configurations take place in the `jmod_config.json`.
There are three parts in this file. 

1. awsConfiguration: enter the credentials (AccessKeyID, SecretAccessKey) for "JmodUser" and the region (e.g. `''`)
2. ec2Configuration: enter the parameters. Non are optional (currently, tags are not used.)
    - `iamInstanceProfileName` requires the name of the role you created earlier. ("JmeterOdSSM")
    - `imageId` requires an Amazon Linux Image with the AWS SSM agent pre-installed.
    - `securityGroup` requires the name of the security group you created

## Running a test
Within the root directory, open a terminal and execute `node createEc2.js`