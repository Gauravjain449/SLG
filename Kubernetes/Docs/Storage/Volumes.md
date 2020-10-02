# https://kubernetes.io/docs/concepts/storage/volumes/

1. awsElasticBlockStore

a. Unlike emptyDir, which is erased when a Pod is removed, the contents of an EBS volume are preserved.

2. some restrictions when using an awsElasticBlockStore volume:

a. the nodes on which Pods are running must be AWS EC2 instances
b. those instances need to be in the same region and availability-zone as the EBS volume

3. Creating an EBS volume, Before you can use an EBS volume with a Pod, 

a. aws ec2 create-volume --availability-zone=eu-west-1a --size=10 --volume-type=gp2

4. AWS EBS Example configuration

# Ref: 01
-----------
5. ConfigMap
a. The configMap resource provides a way to inject configuration data into Pods.

b. The data stored in a ConfigMap object can be referenced in a volume of type configMap

# Ref: 02

6. hostPath
a. A hostPath volume mounts a file or directory from the host node's filesystem into your Pod.

7. projected
a. Following types of volume sources can be projected:

secret
downwardAPI
configMap
serviceAccountToken

b. All sources are required to be in the same namespace as the Pod

8. Using subPath
a. Sometimes, it is useful to share one volume for multiple uses in a single Pod. 

b. The HTML contents are mapped to its html folder, and the databases will be stored in its mysql folder:

# Ref. 03
