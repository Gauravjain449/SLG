# https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/

1. The kubelet uses liveness probes to know when to restart a container.

2. The kubelet uses readiness probes to know when a container is ready to start accepting traffic.

3. The kubelet uses startup probes to know when a container application has started

[HttpStatusCode]
4. Any code greater than or equal to 200 and less than 400 indicates success. Any other code indicates failure.

5. For a TCP probe, the kubelet makes the probe connection at the node, not in the pod,



