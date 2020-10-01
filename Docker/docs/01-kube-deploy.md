# https://docs.docker.com/get-started/kube-deploy/

1. Kubernetes provides many tools for scaling, networking, securing and maintaining your containerized applications, above and beyond the abilities of containers themselves.

2. All containers in Kubernetes are scheduled as pods, which are groups of co-located containers that share some resources.

3. Kubernetes Services and Swarm Services are very different! Despite the similar name, the two orchestrators mean very different things by the term ‘service’. In Swarm, a service provides both scheduling and networking facilities, creating containers and providing tools for routing traffic to them. In Kubernetes, scheduling and networking are handled separately: deployments (or other controllers) handle the scheduling of containers as pods, while services are responsible only for adding networking features to those pods.

4. 