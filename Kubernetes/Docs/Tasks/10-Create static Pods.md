1. Static Pods are managed directly by the kubelet daemon on a specific node, without the API server observing them. Unlike Pods that are managed by the control plane (for example, a Deployment); instead, the kubelet watches each static Pod (and restarts it if it fails).

2. Static Pods are always bound to one Kubelet on a specific node.

3. The kubelet automatically tries to create a mirror Pod on the Kubernetes API server for each static Pod. This means that the Pods running on a node are visible on the API server, but cannot be controlled from there.

4. Note: If you are running clustered Kubernetes and are using static Pods to run a Pod on every node, you should probably be using a DaemonSet instead

5. The running kubelet periodically scans the configured directory (/etc/kubelet.d in our example) for changes and adds/removes Pods as files appear/disappear in this directory.