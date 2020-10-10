kubectl get serviceaccounts

You can create additional ServiceAccount objects like this:

kubectl apply -f - <<EOF
apiVersion: v1
kind: ServiceAccount
metadata:
  name: build-robot
EOF