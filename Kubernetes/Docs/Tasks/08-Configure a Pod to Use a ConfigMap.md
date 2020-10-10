[Create a ConfigMap]
1. Use the option --from-env-file to create a ConfigMap from an env-file, for example:

2. ConfigMap is similar to Secrets, but provides a means of working with strings that don't contain sensitive information.

3. You must create a ConfigMap before referencing it in a Pod specification (unless you mark the ConfigMap as "optional"). If you reference a ConfigMap that doesn't exist, the Pod won't start. Likewise, references to keys that don't exist in the ConfigMap will prevent the pod from starting.

4. If you use envFrom to define environment variables from ConfigMaps, keys that are considered invalid will be skipped. The pod will be allowed to start, but the invalid names will be recorded in the event log (InvalidVariableNames). The log message lists each skipped key. For example:

kubectl get events

5. ConfigMaps reside in a specific Namespace. A ConfigMap can only be referenced by pods residing in the same namespace.

6. You can't use ConfigMaps for static pods, because the Kubelet does not support this

# static pods: A Pod  managed directly by kubelet daemon on a specific node.
