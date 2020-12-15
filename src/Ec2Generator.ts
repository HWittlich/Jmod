import {AwsEc2Parameters} from './model/AwsEc2Parameters'

var AWS = require('aws-sdk')

class Ec2Generator {

    params: {};
    credentials: {};

    constructor(params: any, credentials: any) {
      this.params = params;
      if (credentials){
          this.credentials = credentials;
      }
    }
  
    createInstances() {
        ec2.runInstances(params, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log(data);           // successful response
          });
    }

 }


var params = {
    MaxCount: 'NUMBER_VALUE', /* required */
    MinCount: 'NUMBER_VALUE', /* required */
    AdditionalInfo: 'STRING_VALUE',
    BlockDeviceMappings: [
      {
        DeviceName: 'STRING_VALUE',
        Ebs: {
          DeleteOnTermination: true || false,
          Encrypted: true || false,
          Iops: 'NUMBER_VALUE',
          KmsKeyId: 'STRING_VALUE',
          SnapshotId: 'STRING_VALUE',
          Throughput: 'NUMBER_VALUE',
          VolumeSize: 'NUMBER_VALUE',
          VolumeType: standard | io1 | io2 | gp2 | sc1 | st1 | gp3
        },
        NoDevice: 'STRING_VALUE',
        VirtualName: 'STRING_VALUE'
      },
      /* more items */
    ],
    CapacityReservationSpecification: {
      CapacityReservationPreference: open | none,
      CapacityReservationTarget: {
        CapacityReservationId: 'STRING_VALUE',
        CapacityReservationResourceGroupArn: 'STRING_VALUE'
      }
    },
    ClientToken: 'STRING_VALUE',
    CpuOptions: {
      CoreCount: 'NUMBER_VALUE',
      ThreadsPerCore: 'NUMBER_VALUE'
    },
    CreditSpecification: {
      CpuCredits: 'STRING_VALUE' /* required */
    },
    DisableApiTermination: true || false,
    DryRun: true || false,
    EbsOptimized: true || false,
    ElasticGpuSpecification: [
      {
        Type: 'STRING_VALUE' /* required */
      },
      /* more items */
    ],
    ElasticInferenceAccelerators: [
      {
        Type: 'STRING_VALUE', /* required */
        Count: 'NUMBER_VALUE'
      },
      /* more items */
    ],
    EnclaveOptions: {
      Enabled: true || false
    },
    HibernationOptions: {
      Configured: true || false
    },
    IamInstanceProfile: {
      Arn: 'STRING_VALUE',
      Name: 'STRING_VALUE'
    },
    ImageId: 'STRING_VALUE',
    InstanceInitiatedShutdownBehavior: stop | terminate,
    InstanceMarketOptions: {
      MarketType: spot,
      SpotOptions: {
        BlockDurationMinutes: 'NUMBER_VALUE',
        InstanceInterruptionBehavior: hibernate | stop | terminate,
        MaxPrice: 'STRING_VALUE',
        SpotInstanceType: one-time | persistent,
        ValidUntil: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789
      }
    },
    InstanceType: t1.micro | t2.nano | t2.micro | t2.small | t2.medium | t2.large | t2.xlarge | t2.2xlarge | t3.nano | t3.micro | t3.small | t3.medium | t3.large | t3.xlarge | t3.2xlarge | t3a.nano | t3a.micro | t3a.small | t3a.medium | t3a.large | t3a.xlarge | t3a.2xlarge | t4g.nano | t4g.micro | t4g.small | t4g.medium | t4g.large | t4g.xlarge | t4g.2xlarge | m1.small | m1.medium | m1.large | m1.xlarge | m3.medium | m3.large | m3.xlarge | m3.2xlarge | m4.large | m4.xlarge | m4.2xlarge | m4.4xlarge | m4.10xlarge | m4.16xlarge | m2.xlarge | m2.2xlarge | m2.4xlarge | cr1.8xlarge | r3.large | r3.xlarge | r3.2xlarge | r3.4xlarge | r3.8xlarge | r4.large | r4.xlarge | r4.2xlarge | r4.4xlarge | r4.8xlarge | r4.16xlarge | r5.large | r5.xlarge | r5.2xlarge | r5.4xlarge | r5.8xlarge | r5.12xlarge | r5.16xlarge | r5.24xlarge | r5.metal | r5a.large | r5a.xlarge | r5a.2xlarge | r5a.4xlarge | r5a.8xlarge | r5a.12xlarge | r5a.16xlarge | r5a.24xlarge | r5b.large | r5b.xlarge | r5b.2xlarge | r5b.4xlarge | r5b.8xlarge | r5b.12xlarge | r5b.16xlarge | r5b.24xlarge | r5b.metal | r5d.large | r5d.xlarge | r5d.2xlarge | r5d.4xlarge | r5d.8xlarge | r5d.12xlarge | r5d.16xlarge | r5d.24xlarge | r5d.metal | r5ad.large | r5ad.xlarge | r5ad.2xlarge | r5ad.4xlarge | r5ad.8xlarge | r5ad.12xlarge | r5ad.16xlarge | r5ad.24xlarge | r6g.metal | r6g.medium | r6g.large | r6g.xlarge | r6g.2xlarge | r6g.4xlarge | r6g.8xlarge | r6g.12xlarge | r6g.16xlarge | r6gd.metal | r6gd.medium | r6gd.large | r6gd.xlarge | r6gd.2xlarge | r6gd.4xlarge | r6gd.8xlarge | r6gd.12xlarge | r6gd.16xlarge | x1.16xlarge | x1.32xlarge | x1e.xlarge | x1e.2xlarge | x1e.4xlarge | x1e.8xlarge | x1e.16xlarge | x1e.32xlarge | i2.xlarge | i2.2xlarge | i2.4xlarge | i2.8xlarge | i3.large | i3.xlarge | i3.2xlarge | i3.4xlarge | i3.8xlarge | i3.16xlarge | i3.metal | i3en.large | i3en.xlarge | i3en.2xlarge | i3en.3xlarge | i3en.6xlarge | i3en.12xlarge | i3en.24xlarge | i3en.metal | hi1.4xlarge | hs1.8xlarge | c1.medium | c1.xlarge | c3.large | c3.xlarge | c3.2xlarge | c3.4xlarge | c3.8xlarge | c4.large | c4.xlarge | c4.2xlarge | c4.4xlarge | c4.8xlarge | c5.large | c5.xlarge | c5.2xlarge | c5.4xlarge | c5.9xlarge | c5.12xlarge | c5.18xlarge | c5.24xlarge | c5.metal | c5a.large | c5a.xlarge | c5a.2xlarge | c5a.4xlarge | c5a.8xlarge | c5a.12xlarge | c5a.16xlarge | c5a.24xlarge | c5ad.large | c5ad.xlarge | c5ad.2xlarge | c5ad.4xlarge | c5ad.8xlarge | c5ad.12xlarge | c5ad.16xlarge | c5ad.24xlarge | c5d.large | c5d.xlarge | c5d.2xlarge | c5d.4xlarge | c5d.9xlarge | c5d.12xlarge | c5d.18xlarge | c5d.24xlarge | c5d.metal | c5n.large | c5n.xlarge | c5n.2xlarge | c5n.4xlarge | c5n.9xlarge | c5n.18xlarge | c6g.metal | c6g.medium | c6g.large | c6g.xlarge | c6g.2xlarge | c6g.4xlarge | c6g.8xlarge | c6g.12xlarge | c6g.16xlarge | c6gd.metal | c6gd.medium | c6gd.large | c6gd.xlarge | c6gd.2xlarge | c6gd.4xlarge | c6gd.8xlarge | c6gd.12xlarge | c6gd.16xlarge | cc1.4xlarge | cc2.8xlarge | g2.2xlarge | g2.8xlarge | g3.4xlarge | g3.8xlarge | g3.16xlarge | g3s.xlarge | g4dn.xlarge | g4dn.2xlarge | g4dn.4xlarge | g4dn.8xlarge | g4dn.12xlarge | g4dn.16xlarge | g4dn.metal | cg1.4xlarge | p2.xlarge | p2.8xlarge | p2.16xlarge | p3.2xlarge | p3.8xlarge | p3.16xlarge | p3dn.24xlarge | p4d.24xlarge | d2.xlarge | d2.2xlarge | d2.4xlarge | d2.8xlarge | d3.xlarge | d3.2xlarge | d3.4xlarge | d3.8xlarge | d3en.xlarge | d3en.2xlarge | d3en.4xlarge | d3en.6xlarge | d3en.8xlarge | d3en.12xlarge | f1.2xlarge | f1.4xlarge | f1.16xlarge | m5.large | m5.xlarge | m5.2xlarge | m5.4xlarge | m5.8xlarge | m5.12xlarge | m5.16xlarge | m5.24xlarge | m5.metal | m5a.large | m5a.xlarge | m5a.2xlarge | m5a.4xlarge | m5a.8xlarge | m5a.12xlarge | m5a.16xlarge | m5a.24xlarge | m5d.large | m5d.xlarge | m5d.2xlarge | m5d.4xlarge | m5d.8xlarge | m5d.12xlarge | m5d.16xlarge | m5d.24xlarge | m5d.metal | m5ad.large | m5ad.xlarge | m5ad.2xlarge | m5ad.4xlarge | m5ad.8xlarge | m5ad.12xlarge | m5ad.16xlarge | m5ad.24xlarge | m5zn.large | m5zn.xlarge | m5zn.2xlarge | m5zn.3xlarge | m5zn.6xlarge | m5zn.12xlarge | m5zn.metal | h1.2xlarge | h1.4xlarge | h1.8xlarge | h1.16xlarge | z1d.large | z1d.xlarge | z1d.2xlarge | z1d.3xlarge | z1d.6xlarge | z1d.12xlarge | z1d.metal | u-6tb1.metal | u-9tb1.metal | u-12tb1.metal | u-18tb1.metal | u-24tb1.metal | a1.medium | a1.large | a1.xlarge | a1.2xlarge | a1.4xlarge | a1.metal | m5dn.large | m5dn.xlarge | m5dn.2xlarge | m5dn.4xlarge | m5dn.8xlarge | m5dn.12xlarge | m5dn.16xlarge | m5dn.24xlarge | m5n.large | m5n.xlarge | m5n.2xlarge | m5n.4xlarge | m5n.8xlarge | m5n.12xlarge | m5n.16xlarge | m5n.24xlarge | r5dn.large | r5dn.xlarge | r5dn.2xlarge | r5dn.4xlarge | r5dn.8xlarge | r5dn.12xlarge | r5dn.16xlarge | r5dn.24xlarge | r5n.large | r5n.xlarge | r5n.2xlarge | r5n.4xlarge | r5n.8xlarge | r5n.12xlarge | r5n.16xlarge | r5n.24xlarge | inf1.xlarge | inf1.2xlarge | inf1.6xlarge | inf1.24xlarge | m6g.metal | m6g.medium | m6g.large | m6g.xlarge | m6g.2xlarge | m6g.4xlarge | m6g.8xlarge | m6g.12xlarge | m6g.16xlarge | m6gd.metal | m6gd.medium | m6gd.large | m6gd.xlarge | m6gd.2xlarge | m6gd.4xlarge | m6gd.8xlarge | m6gd.12xlarge | m6gd.16xlarge | mac1.metal,
    Ipv6AddressCount: 'NUMBER_VALUE',
    Ipv6Addresses: [
      {
        Ipv6Address: 'STRING_VALUE'
      },
      /* more items */
    ],
    KernelId: 'STRING_VALUE',
    KeyName: 'STRING_VALUE',
    LaunchTemplate: {
      LaunchTemplateId: 'STRING_VALUE',
      LaunchTemplateName: 'STRING_VALUE',
      Version: 'STRING_VALUE'
    },
    LicenseSpecifications: [
      {
        LicenseConfigurationArn: 'STRING_VALUE'
      },
      /* more items */
    ],
    MetadataOptions: {
      HttpEndpoint: disabled | enabled,
      HttpPutResponseHopLimit: 'NUMBER_VALUE',
      HttpTokens: optional | required
    },
    Monitoring: {
      Enabled: true || false /* required */
    },
    NetworkInterfaces: [
      {
        AssociateCarrierIpAddress: true || false,
        AssociatePublicIpAddress: true || false,
        DeleteOnTermination: true || false,
        Description: 'STRING_VALUE',
        DeviceIndex: 'NUMBER_VALUE',
        Groups: [
          'STRING_VALUE',
          /* more items */
        ],
        InterfaceType: 'STRING_VALUE',
        Ipv6AddressCount: 'NUMBER_VALUE',
        Ipv6Addresses: [
          {
            Ipv6Address: 'STRING_VALUE'
          },
          /* more items */
        ],
        NetworkCardIndex: 'NUMBER_VALUE',
        NetworkInterfaceId: 'STRING_VALUE',
        PrivateIpAddress: 'STRING_VALUE',
        PrivateIpAddresses: [
          {
            Primary: true || false,
            PrivateIpAddress: 'STRING_VALUE'
          },
          /* more items */
        ],
        SecondaryPrivateIpAddressCount: 'NUMBER_VALUE',
        SubnetId: 'STRING_VALUE'
      },
      /* more items */
    ],
    Placement: {
      Affinity: 'STRING_VALUE',
      AvailabilityZone: 'STRING_VALUE',
      GroupName: 'STRING_VALUE',
      HostId: 'STRING_VALUE',
      HostResourceGroupArn: 'STRING_VALUE',
      PartitionNumber: 'NUMBER_VALUE',
      SpreadDomain: 'STRING_VALUE',
      Tenancy: default | dedicated | host
    },
    PrivateIpAddress: 'STRING_VALUE',
    RamdiskId: 'STRING_VALUE',
    SecurityGroupIds: [
      'STRING_VALUE',
      /* more items */
    ],
    SecurityGroups: [
      'STRING_VALUE',
      /* more items */
    ],
    SubnetId: 'STRING_VALUE',
    TagSpecifications: [
      {
        ResourceType: client-vpn-endpoint | customer-gateway | dedicated-host | dhcp-options | egress-only-internet-gateway | elastic-ip | elastic-gpu | export-image-task | export-instance-task | fleet | fpga-image | host-reservation | image | import-image-task | import-snapshot-task | instance | internet-gateway | key-pair | launch-template | local-gateway-route-table-vpc-association | natgateway | network-acl | network-interface | placement-group | reserved-instances | route-table | security-group | snapshot | spot-fleet-request | spot-instances-request | subnet | traffic-mirror-filter | traffic-mirror-session | traffic-mirror-target | transit-gateway | transit-gateway-attachment | transit-gateway-multicast-domain | transit-gateway-route-table | volume | vpc | vpc-peering-connection | vpn-connection | vpn-gateway | vpc-flow-log,
        Tags: [
          {
            Key: 'STRING_VALUE',
            Value: 'STRING_VALUE'
          },
          /* more items */
        ]
      },
      /* more items */
    ],
    UserData: 'STRING_VALUE'
  };
  