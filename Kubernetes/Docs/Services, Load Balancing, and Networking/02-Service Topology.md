# https://kubernetes.io/docs/concepts/services-networking/service-topology/

1. Service Topology enables a service to route traffic based upon the Node topology of the cluster. For example, a service can specify that traffic be preferentially routed to endpoints that are on the same Node as the client, or in the same availability zone

2. The Service Topology feature allowing the Service creator to define a policy for routing traffic based upon the Node labels for the originating and destination Nodes.

3.  There is a preference to keep service traffic within the same zone

4. If your cluster has Service Topology enabled, you can control Service traffic routing by specifying the topologyKeys field on the Service spec. 

5. This field is a preference-order list of Node labels which will be used to sort endpoints when accessing this Service. Traffic will be directed to a Node whose value for the first label matches the originating Node's value for that label. If there is no backend for the Service on a matching Node, then the second label will be considered, and so forth, until no labels remain.

6. If no match is found, the traffic will be rejected,

7. The special value "*" may be used to mean "any topology".

8. If topologyKeys is not specified or empty, no topology constraints will be applied.

Consider a cluster with Nodes that are labeled with their hostname, zone name, and region name. Then you can set the topologyKeys values of a service to direct traffic as follows.

Only to endpoints on the same node, failing if no endpoint exists on the node: ["kubernetes.io/hostname"].
Preferentially to endpoints on the same node, falling back to endpoints in the same zone, followed by the same region, and failing otherwise: ["kubernetes.io/hostname", "topology.kubernetes.io/zone", "topology.kubernetes.io/region"]. This may be useful, for example, in cases where data locality is critical.
Preferentially to the same zone, but fallback on any available endpoint if none are available within this zone: ["topology.kubernetes.io/zone", "*"]

9. # Examples
a. Only Node Local Endpoints: A Service that only routes to node local endpoints. If no endpoints exist on the node, traffic is dropped:

# Ref: 02-Service Topology.yml --- 01

b. Prefer Node Local Endpoints: A Service that prefers node local Endpoints but falls back to cluster wide endpoints if node local endpoints do not exist:

# Ref: 02-Service Topology.yml --- 02

c. Only Zonal or Regional Endpoints : A Service that prefers zonal then regional endpoints. If no endpoints exist in either, traffic is dropped.

# Ref: 02-Service Topology.yml --- 03

d. Prefer Node Local, Zonal, then Regional Endpoints: A Service that prefers node local, zonal, then regional endpoints but falls back to cluster wide endpoints.

# Ref: 02-Service Topology.yml --- 04