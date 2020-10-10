# https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/

[Add a label to a node]
1. List the nodes in your cluster, along with their labels:
kubectl get nodes --show-labels

2. Chose one of your nodes, and add a label to it:
kubectl label nodes <your-node-name> disktype=ssd

e.g:  kubectl label nodes linuxk8s disktype=ssd