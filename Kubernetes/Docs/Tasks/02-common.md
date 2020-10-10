# https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/

A. [Assign Memory Resources to Containers and Pods]

---

1. Command to enable the metrics-server
2. \$ minikube addons enable metrics-server

3. \$ kubectl get apiservices
4. If the resource metrics API is available, the output includes a reference to metrics.k8s.io.

---

5. \$ kubectl cluster-info

6. [Create a namespace] --> Create a namespace so that the resources you create are isolated from the rest of your cluster.
6.1 \$ kubectl create namespace mem-example

7. [Specify a memory request and a memory limit] 
To specify a memory request for a Container, include the resources:requests field in the Container's. To specify a memory limit, include resources:limits.

# Ref: memory-request-limit.yml

7.1 View detailed information about the Pod:
$ kubectl get pod memory-demo --output=yaml --namespace=mem-example

7.2 Run kubectl top to fetch the metrics for the pod:
$ kubectl top pod memory-demo --namespace=mem-example

8. [Exceed a Container's memory limit]
If a Container allocates more memory than its limit, the Container becomes a candidate for termination. If the Container continues to consume memory beyond its limit, the Container is terminated.

# Ref: memory-request-limit-2.yaml

8.1 kubectl describe nodes

9. [Specify a memory request that is too big for your Nodes]

The output shows that the Pod status is PENDING. That is, the Pod is not scheduled to run on any Node, and it will remain in the PENDING state indefinitely:

10.   [If you do not specify a memory limit]

a. The Container is running in a namespace that has a default memory limit, and the Container is automatically assigned the default limit. 

11. [Motivation for memory requests and limits]

a. By configuring memory requests and limits for the Containers that run in your cluster, you can make efficient use of the memory resources available on your cluster's Nodes.

b. By keeping a Pod's memory request low, you give the Pod a good chance of being scheduled. 

12 . [CPU requests and limits]

a. The Container is running in a namespace that has a default CPU limit, and the Container is automatically assigned the default limit. Cluster administrators can use a LimitRange to specify a default value for the CPU limit

b. By configuring the CPU requests and limits of the Containers that run in your cluster, you can make efficient use of the CPU resources available on your cluster Nodes. 

c. By keeping a Pod CPU request low, you give the Pod a good chance of being scheduled.

13. [https://kubernetes.io/docs/tasks/configure-pod-container/configure-gmsa/]

a. Configure Group Managed Service Accounts (GMSA) for Pods and containers that will run on Windows nodes.
