# https://docs.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-cli
# https://docs.microsoft.com/en-us/cli/azure/authenticate-azure-cli

---
az --version

az login

az group create --name myResourceGroup --location eastus

az vm create \
  --resource-group myResourceGroup \
  --name myVM \
  --image UbuntuLTS \
  --admin-username azureuser \
  --generate-ssh-keys

az vm open-port --port 80 --resource-group myResourceGroup --name myVM

ssh azureuser@52.172.173.240

sudo apt-get -y update

sudo apt-get -y install nginx

on browser type http://52.172.173.240

az group delete --name myResourceGroup
---

[Create a deployment group]

1. sudo apt-get install -y libunwind8 libcurl3

2. Add deployment group Script

3. 

