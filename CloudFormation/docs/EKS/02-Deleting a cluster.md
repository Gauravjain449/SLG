# https://docs.aws.amazon.com/eks/latest/userguide/delete-cluster.html

 [ To delete an Amazon EKS cluster with the AWS Management Console ]

1. List all services running in your cluster.

kubectl get svc --all-namespaces

2. Delete any services that have an associated EXTERNAL-IP value. These services are fronted by an Elastic Load Balancing load balancer, and you must delete them in Kubernetes to allow the load balancer and associated resources to be properly released.

kubectl delete svc <service-name>

3. 