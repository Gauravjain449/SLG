jobs:
- job: test
  variables:
    connectionString: <test-stage connection string>
  steps:
  - task: AzureRmWebAppDeployment@4
    inputs:
      azureSubscription: '<Test stage Azure service connection>'
      WebAppName: '<name of test stage web app>'
      enableXmlVariableSubstitution: true

- job: prod
  dependsOn: test
  variables:
    connectionString: <prod-stage connection string>
  steps:
  - task: AzureRmWebAppDeployment@4
    inputs:
      azureSubscription: '<Prod stage Azure service connection>'
      WebAppName: '<name of prod stage web app>'
      enableXmlVariableSubstitution: true
---



