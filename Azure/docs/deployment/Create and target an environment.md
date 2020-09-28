# https://docs.microsoft.com/en-in/azure/devops/pipelines/process/environments?view=azure-devops

# https://docs.microsoft.com/en-in/azure/devops/pipelines/process/deployment-jobs?view=azure-devops

1. Remove a VM from an Environment
To unconfigure virtual machines that are previously added to an environment, run this command from an administrator PowerShell command prompt on each of the machines, in the same folder path where the script to register to the environment has been previously run:


Copy
./config.cmd remove

2. Known limitations
a. When you retry a stage, it will rerun the deployment on all VMs and not just failed targets.

