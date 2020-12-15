function shellCommandParameters(instanceIds) {
    return {

        DocumentName: 'AWS-RunShellScript',
        /* required 
        CloudWatchOutputConfig: {
            CloudWatchLogGroupName: 'STRING_VALUE',
            CloudWatchOutputEnabled: true || false
        },
        Comment: 'STRING_VALUE',
        DocumentHash: 'STRING_VALUE',
        DocumentHashType: Sha256 | Sha1,
        DocumentVersion: 'STRING_VALUE',
        InstanceIds: [
            'STRING_VALUE',
        ],
        MaxConcurrency: 'STRING_VALUE',
        MaxErrors: 'STRING_VALUE',
        NotificationConfig: {
            NotificationArn: 'STRING_VALUE',
            NotificationEvents: [
                All | InProgress | Success | TimedOut | Cancelled | Failed,
            ],
            NotificationType: Command | Invocation
        },
        OutputS3BucketName: 'STRING_VALUE',
        OutputS3KeyPrefix: 'STRING_VALUE',
        OutputS3Region: 'STRING_VALUE', */
        Parameters: {
            'commands': [
                'cd /home',
                'touch hello.txt',
                'wall "this is a broadcast"'
                //'shutdown +1'

            ],
            // 'workingDirectory': ... 
        },
        InstanceIds: instanceIds
            //ServiceRoleArn: 'STRING_VALUE',
            //Targets: [{
            //       Key: 'tag:Hagen',
            //     Values: [
            //     'value:1',
            /* more items */
            //   ]
            //},
            /* more items */
            //],
            // TimeoutSeconds: 'NUMBER_VALUE'
    }
}

module.exports.create = shellCommandParameters;