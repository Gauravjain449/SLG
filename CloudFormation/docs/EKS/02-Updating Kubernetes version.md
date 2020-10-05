# https://docs.aws.amazon.com/eks/latest/userguide/update-cluster.html

1. In order to upgrade the cluster, Amazon EKS requires 2-3 free IP addresses from the subnets which were provided when you created the cluster. 

2. Additionally, if any of the subnets or security groups that were provided during cluster creation have been deleted, the cluster upgrade process can fail.

3. Amazon EKS does not modify any of your Kubernetes add-ons when you update a cluster. After updating your cluster, we recommend that you update your add-ons to the versions.

[Update an existing cluster]

4. Get the Kubernetes version of your cluster control plane.
kubectl version --short

5. Get the Kubernetes version of your nodes with the following command.

kubectl get nodes

6. If your nodes are more than one Kubernetes minor version older than your control plane, then you must upgrade your nodes to a newer Kubernetes minor version before you update your cluster's Kubernetes version.

7. (We recommend that you update your nodes to your cluster's current pre-update Kubernetes minor version prior to your cluster update. Your nodes must not run a newer Kubernetes version than your control plane. For example, if your control plane is running version 1.16 and your nodes are running version 1.14, update your nodes to version 1.15 or 1.16 (recommended) before you update your cluster’s Kubernetes version to 1.17)

8. If you are upgrading your cluster to Kubernetes version 1.13 or later, ensure that the proper pod security policies are in place before you update to avoid any issues

kubectl get psp eks.privileged

9. [Update your cluster using eksctl, the AWS Management Console, or the AWS CLI.]

# Ref: Documentation

10. You can update only one minor version at a time. 

11. Important
You may need to update some of your deployed resources before you can update to 1.16. For more information, see Kubernetes 1.16 upgrade prerequisites. Upgrading a cluster from 1.16 to 1.17 will fail if any of your AWS Fargate pods have a kubelet minor version earlier than 1.16. Before upgrading your cluster from 1.16 to 1.17, you need to recycle your Fargate pods so that their kubelet is 1.16 before attempting to upgrade the cluster to 1.17.

12. eksctl upgrade cluster --name <dev> --approve 
This process takes several minutes to complete.

13. [AWS Management Console]

14. [AWS CLI]

15. 