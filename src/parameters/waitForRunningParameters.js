var waitForRunningParameters = {
    Filters: [{
        Name: 'tag:Hagen',
        Values: [
            '1'
        ],
    }, ],
    $waiter: {
        maxAttempts: 20,
        delay: 5
    },
    DryRun: false,
}

module.exports = waitForRunningParameters;