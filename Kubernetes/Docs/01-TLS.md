# https://kubernetes.io/docs/tasks/tls/

## Requirement of kube-apiserver to enable tls bootstrap 
## tls bootstrapping and optional automatic aproval 

1. [Configure Certificate Rotation for the Kubelet]: 

Append the both old and new CA to the file against --client-ca-file and --kubelet-certificate-authority flag in the kube-apiserver configuration.

If your cluster is using bootstrap tokens to join nodes, update the ConfigMap cluster-info in the kube-public namespace with new CA.

