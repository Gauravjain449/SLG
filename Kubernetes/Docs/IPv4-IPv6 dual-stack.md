# https://kubernetes.io/docs/concepts/services-networking/dual-stack/

1. IPv4/IPv6 dual-stack enables the allocation of both IPv4 and IPv6 addresses to Pods and Services.

2. If you enable IPv4/IPv6 dual-stack networking for your Kubernetes cluster, the cluster will support the simultaneous assignment of both IPv4 and IPv6 addresses.

3. Prerequisites
a. Kubernetes 1.16 or later
b. A network plugin that supports dual-stack (such as Kubenet or Calico)
c. Provider support for dual-stack networking (Cloud provider or otherwise must be able to provide Kubernetes nodes with routable IPv4/IPv6 network interfaces)

4. e.g IPv6
---
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  ipFamily: IPv6
  selector:
    app: MyApp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 9376
---

5. e.g. IPv4
---
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  ipFamily: IPv4
  selector:
    app: MyApp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 9376
---

