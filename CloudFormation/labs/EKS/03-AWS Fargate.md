# Fargate Prerequisites 

# https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html
1. Pod execution role : The Amazon EKS pod execution role is required to run pods on AWS Fargate infrastructure.

a. Before you create a Fargate profile, you must create an IAM role with the following IAM policy:

## AmazonEKSFargatePodExecutionRolePolicy

b. 