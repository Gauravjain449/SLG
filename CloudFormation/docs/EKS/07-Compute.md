# https://docs.aws.amazon.com/eks/latest/userguide/eks-compute.html

1. If you launch a managed node group in a public subnet on or after April 22, 2020, the subnet must have MapPublicIpOnLaunch set to true for the instances to be able to successfully join a cluster.

2. Managed nodegroups cannot be deployed to nodes on AWS Outposts or to nodes deployed in AWS Wavelength or AWS Local Zones.

3. 