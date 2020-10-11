1. cat <<EOF > deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-nginx
spec:
  selector:
    matchLabels:
      run: my-nginx
  replicas: 3
  template:
    metadata:
      labels:
        run: my-nginx
    spec:
      containers:
      - name: my-nginx
        image: nginx:alpine
        ports:
        - containerPort: 80
EOF

2. cat <<EOF >./kustomization.yaml
namespace: xxx
namePrefix: dev-
nameSuffix: "-001"
commonLabels:
  app: my-nginx
commonAnnotations:
  oncallPager: 800-555-1212
resources:
- deployment.yaml

EOF
---
3. kubectl apply -k ./

kubectl get -k ./

kubectl describe -k ./

kubectl diff -k ./

kubectl delete -k ./



