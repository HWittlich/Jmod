function createStartupScript(terminateAfterXMinutes) {
    return `#!/bin/bash
yum update -y
echo 1024 65000 | tee /proc/sys/net/ipv4/ip_local_port_range
echo \"* hard nofile 1000000\" >> /etc/security/limits.conf
echo \"* soft nofile 1000000\" >> /etc/security/limits.conf
sysctl -w fs.file-max=1000000
sysctl -p
sysctl -w net.ipv4.tcp_tw_reuse=1
shutdown +${terminateAfterXMinutes}
`
}
module.exports.createStartupScript = createStartupScript;