1. Cluster networking provides communication between different Pods.

2. The Service resource lets you expose an application running in Pods to be reachable from outside your cluster.

3. You can also use Services to publish services only for consumption inside your cluster.

4. Kubernetes gives Pods their own IP addresses and a single DNS name for a set of Pods, and can load-balance across them.

5. Service is an abstraction which defines a logical set of Pods and a policy by which to access them (sometimes this pattern is called a micro-service). The set of Pods targeted by a Service is usually determined by a selector. 

6. A Service in Kubernetes is a REST object, similar to a Pod. 

7. For example, suppose you have a set of Pods that each listen on TCP port 9376 and carry a label app=MyApp:

# ref 
01-service.yml ---01

8. Kubernetes assigns Service an IP address (sometimes called the "cluster IP"), which is used by the Service proxies.

9. Note: A Service can map any incoming port to a targetPort. By default and for convenience, the targetPort is set to the same value as the port field.

10. The default protocol for Services is TCP; you can also use any other supported protocol.

11. As many Services need to expose more than one port, Kubernetes supports multiple port definitions on a Service object. Each port definition can have the same protocol, or a different one.

# Services without selectors

12. Services most commonly abstract access to Kubernetes Pods, but they can also abstract other kinds of backends. For example:

a. You want to point your Service to a Service in a different Namespace or on another cluster.

b. You want to have an external database 

# ref: 
01-service.yml ---02

13. Note:
a. The endpoint IPs must not be: loopback (127.0.0.0/8 for IPv4, ::1/128 for IPv6), or link-local (169.254.0.0/16 and 224.0.0.0/24 for IPv4, fe80::/64 for IPv6).

b. Endpoint IP addresses cannot be the cluster IPs of other Kubernetes Services, because kube-proxy doesn't support virtual IPs as a destination.

14. An ExternalName Service is a special case of Service that does not have selectors and uses DNS names instead.

# EndpointSlices

15. EndpointSlices are an API resource that can provide a more scalable alternative to Endpoints. Although conceptually quite similar to Endpoints, EndpointSlices allow for distributing network endpoints across multiple resources. By default, an EndpointSlice is considered "full" once it reaches 100 endpoints, at which point additional EndpointSlices will be created to store any additional endpoints.

16 . kube-proxy takes the SessionAffinity setting of the Service into account when deciding which backend Pod to use.

17. You can use Pod readiness probes to verify that backend Pods are working OK, so that kube-proxy in iptables mode only sees backends that test out as healthy. Doing this means you avoid having traffic sent via kube-proxy to a Pod that's known to have failed.

# ref:
services-iptables-overview.svg

18. If you want to make sure that connections from a particular client are passed to the same Pod each time, you can select the session affinity based on the client's IP addresses by setting service.spec.sessionAffinity to "ClientIP" (the default is "None"). You can also set the maximum session sticky time by setting service.spec.sessionAffinityConfig.clientIP.timeoutSeconds appropriately. (the default value is 10800, which works out to be 3 hours)

# Multi-Port Services
19. For some Services, you need to expose more than one port. Kubernetes lets you configure multiple port definitions on a Service object. When using multiple ports for a Service, you must give all of your ports names so that these are unambiguous.

# ref: 
01-service.yml ---03

20. Note:
As with Kubernetes names in general, names for ports must only contain lowercase alphanumeric characters and -. Port names must also start and end with an alphanumeric character.
For example, the names 123-abc and web are valid, but 123_abc and -web are not.

21. # Choosing your own IP address
a. You can specify your own cluster IP address as part of a Service creation request. To do this, set the .spec.clusterIP field. For example, if you already have an existing DNS entry that you wish to reuse, or legacy systems that are configured for a specific IP address and difficult to re-configure.

b. The IP address that you choose must be a valid IPv4 or IPv6 address from within the service-cluster-ip-range CIDR range that is configured for the API server.

c. If you try to create a Service with an invalid clusterIP address value, the API server will return a 422 HTTP status code to indicate that there's a problem.

22. # Discovering services
a. Kubernetes supports 2 primary modes of finding a Service - environment variables and DNS

b. Note:
When you have a Pod that needs to access a Service, and you are using the environment variable method to publish the port and cluster IP to the client Pods, you must create the Service before the client Pods come into existence. Otherwise, those client Pods won't have their environment variables populated.

If you only use DNS to discover the cluster IP for a Service, you don't need to worry about this ordering issue

23. # DNS
a. A cluster-aware DNS server, such as CoreDNS, watches the Kubernetes API for new Services and creates a set of DNS records for each one. If DNS has been enabled throughout your cluster then all Pods should automatically be able to resolve Services by their DNS name.

b. For example, if you have a Service called my-service in a Kubernetes namespace my-ns, the control plane and the DNS Service acting together create a DNS record for my-service.my-ns. Pods in the my-ns namespace should be able to find it by simply doing a name lookup for my-service (my-service.my-ns would also work).

c. Pods in other namespaces must qualify the name as my-service.my-ns. These names will resolve to the cluster IP assigned for the Service.

d. Kubernetes also supports DNS SRV (Service) records for named ports. If the my-service.my-ns Service has a port named http with the protocol set to TCP, you can do a DNS SRV query for _http._tcp.my-service.my-ns to discover the port number for http, as well as the IP address.

e. The Kubernetes DNS server is the only way to access ExternalName Services. 

24. # Headless Services
a. Sometimes you don't need load-balancing and a single Service IP. In this case, you can create what are termed "headless" Services, by explicitly specifying "None" for the cluster IP (.spec.clusterIP).

b. You can use a headless Service to interface with other service discovery mechanisms.

c. For headless Services, a cluster IP is not allocated, kube-proxy does not handle these Services, and there is no load balancing or proxying

d. DNS is automatically configured depends on whether the Service has selectors:
 - With selectors:
 For headless Services that define selectors, the endpoints controller creates Endpoints records in the API, and modifies the DNS configuration to return records (addresses) that point directly to the Pods backing the Service.

 - Without selectors
 For headless Services that do not define selectors, the endpoints controller does not create Endpoints records. However, the DNS system looks for and configures either:
 -- CNAME records for ExternalName-type Services.
 -- A records for any Endpoints that share a name with the Service, for all other types

 25. 






