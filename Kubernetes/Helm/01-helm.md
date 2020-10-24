# https://github.com/helm/helm

1. Helm is a tool that streamlines installing and managing Kubernetes applications.
 Think of it like apt/yum/homebrew for Kubernetes.

2. Helm renders your templates and communicates with the Kubernetes API

3. Helm runs on your laptop, CI/CD, or wherever you want it to run.

---
22 Oct

1. Using Helm to manage packages on your Kubernetes cluster.
2. Three Big Concepts : A Chart, A Repository, A Release.
3. A Chart is a Helm package. It contains all of the resource definitions necessary to run an application, tool, or service inside of a Kubernetes cluster.
4. A Repository is the place where charts can be collected and shared. 
5. A Release is an instance of a chart running in a Kubernetes cluster.

** Helm installs charts into Kubernetes, creating a new release for each installation. And to find new charts, you can search Helm chart repositories.

6. 
