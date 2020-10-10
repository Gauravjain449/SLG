 kubectl get serviceaccounts

 You can create additional ServiceAccount objects like this:

 kubectl apply -f - <<EOF
apiVersion: v1
kind: ServiceAccount
metadata:
  name: build-robot
EOF

kubectl get serviceaccounts/build-robot -o yaml

kubectl get secrets

then you will see that a token has automatically been created and is referenced by the service account.

To use a non-default service account, simply set the spec.serviceAccountName field of a pod to the name of the service account you wish to use.

The service account has to exist at the time the pod is created, or it will be rejected.

You cannot update the service account of an already created pod.

You can clean up the service account from this example like this:

kubectl delete serviceaccount/build-robot

[Manually create a service account API token.]

[Add ImagePullSecrets to a service account]

kubectl get secret regcred --output="jsonpath={.data.\.dockerconfigjson}" | base64 --decode

