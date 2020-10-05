# https://docs.microsoft.com/en-in/azure/devops/pipelines/apps/cd/deploy-webdeploy-webapps?view=azure-devops

# https://docs.microsoft.com/en-in/azure/devops/pipelines/apps/cd/deploy-docker-webapp?view=azure-devops&tabs=java-script

[Why use a separate release pipeline instead of the automatic deployment feature available in Web App for Containers?]

1. You can configure Web App for Containers to automatically configure deployment as part of the CI/CD so that the web app is automatically updated when a new image is pushed to the container registry (this feature uses a webhook).

2. However, by using a separate release pipeline in Azure Pipelines or TFS you gain extra flexibility and traceability. 

3. You can:
a. Specify an appropriate tag that is used to select the deployment target for multi-stage deployments.
b. Use separate container registries for different stages.
c. Use parameterized start-up commands to, for example, set the values of variables based on the target stage.
d. Avoid using the same tag for all the deployments. The default CD pipeline for Web App for Containers uses the same tag for every deployment. While this may be appropriate for a tag such as latest, you can achieve end-to-end traceability from code to deployment by using a build-specific tag for each deployment. For example, the Docker build tasks let you tag your images with the Build.ID for each deployment.

# https://docs.microsoft.com/en-in/azure/devops/pipelines/apps/cd/deploy-aks?view=azure-devops&tabs=java-script

[Deploy a Docker container app to Azure Kubernetes Service]

1. Configure authentication
a. When you use Azure Container Registry (ACR) with Azure Kubernetes Service (AKS), you must establish an authentication mechanism. This can be achieved in two ways:

-- Grant AKS access to ACR. See Authenticate with Azure Container Registry from Azure Kubernetes Service.
-- Use a Kubernetes image pull secret. An image pull secret can be created by using the Kubernetes deployment task.

# https://docs.microsoft.com/en-in/azure/devops/pipelines/targets/cosmos-db?view=azure-devops

[CI/CD with App Service and Azure Cosmos DB]
