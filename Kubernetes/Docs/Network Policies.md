https://kubernetes.io/docs/concepts/services-networking/network-policies/

---

1. NetworkPolicies are an application-centric construct which allow you to specify how a pod is allowed to communicate with various network "entities"

2. When defining a pod- or namespace- based NetworkPolicy, you use a selector to specify what traffic is allowed to and from the Pod(s) that match the selector.

3. When IP based NetworkPolicies are created, we define policies based on IP blocks (CIDR ranges)

4. Prerequisites
a. Network policies are implemented by the network plugin. To use network policies, you must be using a networking solution which supports NetworkPolicy.

5. Isolated and Non-isolated Pods
a. By default, pods are non-isolated; they accept traffic from any source.

b. Pods become isolated by having a NetworkPolicy that selects them. Once there is any NetworkPolicy in a namespace selecting a particular pod, that pod will reject any connections that are not allowed by any NetworkPolicy. (Other pods in the namespace that are not selected by any NetworkPolicy will continue to accept all traffic.)

c. Network policies do not conflict; they are additive. 

d. Check Network Policies -> 01-NetworkPolicy.yml


