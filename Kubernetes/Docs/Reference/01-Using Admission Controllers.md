# https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/

An admission controller is a piece of code that intercepts requests to the Kubernetes API server prior to persistence of the object, but after the request is authenticated and authorized. 


1. here are two special controllers: MutatingAdmissionWebhook and ValidatingAdmissionWebhook. These execute the mutating and validating (respectively) admission control webhooks which are configured in the API.

2. kube-apiserver --enable-admission-plugins=NamespaceLifecycle,LimitRanger ...

3. kube-apiserver --disable-admission-plugins=PodNodeSelector,AlwaysDeny ...

4. 