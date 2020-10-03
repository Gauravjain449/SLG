# https://docs.microsoft.com/en-in/azure/devops/pipelines/process/run-number?view=azure-devops&tabs=yaml

1. e.g. (Try)

name: $(SourceBranchName)_$(Build.BuildId)_$(Build.RequestedFor)_$(Date:dd-MMM-yyy)$(Rev:.r)

