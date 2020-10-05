# https://docs.aws.amazon.com/eks/latest/userguide/fargate.html

1. Classic Load Balancers and Network Load Balancers are not supported on pods running on Fargate. For ingress, we recommend that you use the ALB Ingress Controller on Amazon EKS (minimum version v1.1.4).

2. Daemonsets are not supported on Fargate. If your application requires a daemon, you should reconfigure that daemon to run as a sidecar container in your pods.

3. Pods running on Fargate are only supported on private subnets (with NAT gateway access to AWS services, but not a direct route to an Internet Gateway), so your cluster's VPC must have private subnets available.

4. eksctl create cluster --name <my-cluster> --version <1.17> --fargate
a. Adding the --fargate option in the command above creates a cluster without a node group. However, eksctl creates a pod execution role, a Fargate profile for the default and kube-system namespaces, and it patches the coredns deployment so that it can run on Fargate.

5. You can check for a cluster security group for your cluster in the AWS Management Console under the cluster's Networking section, or with the following AWS CLI command:

a. aws eks describe-cluster --name <cluster_name> --query cluster.resourcesVpcConfig.clusterSecurityGroupId

6. Note
If you created your cluster with eksctl using the --fargate option, then your cluster already has a pod execution role and you can skip ahead to Create a Fargate profile for your cluster. Similarly, if you use eksctl to create your Fargate profiles, eksctl will create your pod execution role if one does not already exist.

[ Create a Fargate profile for your cluster ]

7. Before you can schedule pods running on Fargate in your cluster, you must define a Fargate profile that specifies which pods should use Fargate when they are launched.

8. Fargate profiles are immutable. However, you can create a new updated profile to replace an existing profile and then delete the original after the updated profile has finished creating.

9. If any Fargate profiles in a cluster are in the DELETING status, you must wait for that Fargate profile to finish deleting before you can create any other profiles in that cluster.

10. Only one Fargate profile in a cluster can be in the DELETING status at a time. You must wait for a Fargate profile to finish deleting before you can delete any other profiles in that cluster.

11. Fargate adds 256 MB to each pod's memory reservation for the required Kubernetes components (kubelet, kube-proxy, and containerd).

12. When provisioned, each pod running on Fargate receives 20 GB of container image layer storage.

13. 