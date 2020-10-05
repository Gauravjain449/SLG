# https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html

1. You can create a cluster with eksctl, the AWS Management Console, or the AWS CLI.
---
[ Create a cluster with the AWS Management Console ]

1. Prerequisites:
a. VPC and a dedicated security group and Amazon EKS cluster IAM role.

2. When you create an Amazon EKS cluster, you specify the VPC subnets for your cluster to use. Amazon EKS requires subnets in at least two Availability Zones. We recommend a VPC with public and private subnets so that Kubernetes can create public load balancers in the public subnets that load balance traffic to pods running on nodes that are in private subnets.


