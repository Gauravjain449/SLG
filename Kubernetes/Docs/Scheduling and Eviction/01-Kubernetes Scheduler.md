1. kube-scheduler is the default scheduler for Kubernetes and runs as part of the control plane.

2. For every newly created pod or other unscheduled pods, kube-scheduler selects an optimal node for them to run on.

3. In a cluster, Nodes that meet the scheduling requirements for a Pod are called feasible nodes.

4. If none of the nodes are suitable, the pod remains unscheduled

5. The scheduler finds feasible Nodes for a Pod and then runs a set of functions to score the feasible Nodes and picks a Node with the highest score among the feasible ones to run the Pod. The scheduler then notifies the API server about this decision in a process called binding.

[Node selection in kube-scheduler]

6. kube-scheduler selects a node for the pod in a 2-step operation:

Filtering
Scoring

a. The filtering step finds the set of Nodes where it's feasible to schedule the Pod. For example, the PodFitsResources filter checks whether a candidate Node has enough available resource to meet a Pod's specific resource requests. After this step, the node list contains any suitable Nodes; often, there will be more than one. If the list is empty, that Pod isn't (yet) schedulable.

In the scoring step, the scheduler ranks the remaining nodes to choose the most suitable Pod placement. The scheduler assigns a score to each Node that survived filtering, basing this score on the active scoring rules.

Finally, kube-scheduler assigns the Pod to the Node with the highest ranking. If there is more than one node with equal scores, kube-scheduler selects one of these at random.

