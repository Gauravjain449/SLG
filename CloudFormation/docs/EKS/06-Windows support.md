# https://docs.aws.amazon.com/eks/latest/userguide/windows-support.html

1. Host networking mode is not supported for Windows workloads.

2. Amazon EKS clusters must contain one or more Linux nodes to run core system pods that only run on Linux, such as coredns and the VPC resource controller.

3. You cannot use Security groups for pods with pods running on Windows nodes.

4. Windows nodes support one elastic network interface per node. 

5. The number of pods that you can run per Windows node is equal to the number of IP addresses available per elastic network interface for the node's instance type, minus one.

6. 