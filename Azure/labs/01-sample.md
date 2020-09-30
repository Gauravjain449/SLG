1. az account list-locations \
  --query "[].{Name: name, DisplayName: displayName}" \
  --output table

2. az configure --defaults location=centralindia

