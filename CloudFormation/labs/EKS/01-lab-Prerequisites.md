---
[Creating a VPC for your Amazon EKS cluster]

# https://docs.aws.amazon.com/eks/latest/userguide/create-public-private-vpc.html
1. Ymls --> VPC with public and private subnets.yml

a. stack name --> eks-vpc
b. Record the SecurityGroups value for the security group that was created. When you add nodes to your cluster, you must specify the ID of the security group.

c. Record the VpcId for the VPC that was created. You need this when you launch your node group template.

d. Record the SubnetIds for the subnets that were created and whether you created them as public or private subnets. When you add nodes to your cluster, you must specify the IDs of the subnets that you want to launch the nodes into.

# https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html
2. EKS security group --> 01-chrome-capture.jpg

# https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html
3. Amazon EKS IAM roles --> 

a. Stack Name --> eksClusterRole


