# https://www.guru99.com/kubernetes-interview-questions-answers.html

1. Define Heapster in Kubernetes
a. A Heapster is a metrics collection and performance monitoring system for data that are collected by the Kublet.

2. What is the difference between Kubernetes and Docker Swarm?

a. Kubernetes Provides an auto-scaling feature.                | Docker Swarm does not provide an auto-scaling feature.
b. Manually configure your load balancing settings.            | Does auto load balancing
c. GUI is available.                                           | GUI not available.

3. Why load balancer is needed?
a. A load balancer is needed because it gives a standard way to distribute network traffic among different services, which runs in the backend.

4. What are the tools that are used for container monitoring?
a. Heapster
b. cAdvisor
c. Prometheus
d. InfluxDB
e. Grafana

5. Define headless service
a. ?

6. Explain Prometheus in Kubernetes
a. Prometheus is an application that is used for monitoring and alerting. It can be called out to your systems, grab real-time metrics, compress it, and stores properly in a database.

7. List tools for container orchestration
a. Docker swarm,
b. Apache Mesos
c. Kubernetes

8. Why use Daemon sets?
a.  It enables to runs storage platforms like ceph and glusterd on each node.
b. Daemon sets run the logs collection on every node such as filebeat or fluentd.
c. It performs node monitoring on each and every node.

9. What is Sematext Docker Agent?
a. Sematext Docker agent is a log collection agent with events and metrics. It runs as a small container in each Docker host. These agents gather metrics, events, and logs for all cluster nodes and containers.

10. What are federated clusters?
a. Federated clusters multiple clusters that are managed as a single cluster.

11. What are the ways to provide API-Security on Kubernetes?
a. Using correct auth mode with API server authentication mode= Node.
b. Make kubeless that protects its API via authorization-mode=Webhook.
c. Ensure the kube-dashboard uses a restrictive RBAC (Role-Based Access Control) policy

12. What is ContainerCreating pod?
a. A ContainerCreating pod is one that can be scheduled on a node but can’t start up properly.




