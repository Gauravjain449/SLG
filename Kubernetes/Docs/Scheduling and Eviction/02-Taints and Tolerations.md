1. Taints and tolerations work together to ensure that pods are not scheduled onto inappropriate nodes. One or more taints are applied to a node; this marks that the node should not accept any pods that do not tolerate the taints

2. DaemonSet pods are created with NoExecute tolerations for the following taints with no tolerationSeconds:

node.kubernetes.io/unreachable
node.kubernetes.io/not-ready

This ensures that DaemonSet pods are never evicted due to these problems

3. 