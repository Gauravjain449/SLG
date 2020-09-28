https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/



---
1. In order for the Ingress resource to work, the cluster must have an ingress controller running.

2. Unlike other types of controllers which run as part of the kube-controller-manager binary, Ingress controllers are not started automatically with a cluster. Choose the ingress controller implementation that best fits your cluster.

3. Additional controllers:

a. AKS Application Gateway Ingress Controller is an ingress controller that enables ingress to AKS clusters using the Azure Application Gateway.

b. AWS ALB Ingress Controller enables ingress using the AWS Application Load Balancer.

c. NGINX, Inc. offers support and maintenance for the NGINX Ingress Controller for Kubernetes.

d. Traefik is a fully featured ingress controller (Let's Encrypt, secrets, http2, websocket), and it also comes with commercial support by Containous.

4. Using multiple Ingress controllers

a. You may deploy any number of ingress controllers within a cluster. When you create an ingress, you should annotate each ingress with the appropriate ingress.class to indicate which ingress controller should be used if more than one exists within your cluster.

b. If you do not define a class, your cloud provider may use a default ingress controller.

