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

ssh azureuser@13.72.87.200

sudo apt-get -y update

sudo apt-get -y install nginx

on browser type http://13.72.87.200

az group delete --name myResourceGroup
---

