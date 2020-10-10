
sudo su -

apt-get update -y

apt-get install -y apt-transport-https

curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -

cat <<EOF > /etc/apt/sources.list.d/kubernetes.list
deb http://apt.kubernetes.io/ kubernetes-xenial main
EOF


apt-get update -y

swapoff -a

sed -i '/ swap / s/^\(.*\)$/#\1/g' /etc/fstab

apt-get install -y docker.io

usermod -aG docker ubuntu

systemctl restart docker

systemctl enable docker.service

apt-get install -y kubelet kubeadm kubectl kubernetes-cni

systemctl daemon-reload

systemctl start kubelet

systemctl enable kubelet.service

kubeadm init

[To start using your cluster, you need to run the following as a regular user:]
mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

[Then you can join any number of worker nodes by running the following on each as root:]
kubeadm join 10.0.0.4:6443 --token azufwb.hk7u90pmhmgnit3p \
    --discovery-token-ca-cert-hash sha256:5946f7ca33b4f770e9ddb697353ec8bee4547e1ae7979d059eca9cf99a62b12f


kubectl get pods -o wide --all-namespaces

export kubever=$(kubectl version | base64 | tr -d '\n')
kubectl apply -f "https://cloud.weave.works/k8s/net?k8s-version=$kubever"

kubectl get pods -o wide --all-namespaces

kubectl get nodes

[Below are not required]
kubeadm token create --print-join-command

[kubectl run nginx-demo --image=nginx --port=80]

[kubectl expose deployment nginx-demo --port=80 --type=LoadBalancer]


