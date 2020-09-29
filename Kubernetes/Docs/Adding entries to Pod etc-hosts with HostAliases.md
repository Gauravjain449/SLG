# https://kubernetes.io/docs/concepts/services-networking/add-entries-to-pod-etc-hosts-with-host-aliases/

1. Adding entries to a Pod's /etc/hosts file provides Pod-level override of hostname resolution when DNS and other options are not applicable. You can add these custom entries with the HostAliases field in PodSpec.

2. Modification not using HostAliases is not suggested because the file is managed by the kubelet and can be overwritten on during Pod creation/restart.

3. ** kubectl exec nginx -- cat /etc/hosts

4. Adding additional entries with hostAliases
a. For example: to resolve foo.local, bar.local to 127.0.0.1 and foo.remote, bar.remote to 10.1.2.3, you can configure HostAliases for a Pod under .spec.hostAliases:

(ref): Network Policies -> 02-hostaliases-pod.yml

5. The kubelet manages the hosts file for each container of the Pod to prevent Docker from modifying the file after the containers have already been started.

6. Caution:
a. Avoid making manual changes to the hosts file inside a container.

b. If you make manual changes to the hosts file, those changes are lost when the container exits.