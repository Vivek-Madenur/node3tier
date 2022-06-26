# Use this to crete GKG cluster

## Authenticate

### Linux or MacOS

```bash
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"
```

###  Windows

For PowerShell:

```bash
$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\username\Downloads\service-account-file.json"
```

For command prompt:

```bash
set GOOGLE_APPLICATION_CREDENTIALS=C:\Users\username\Downloads\service-account-file.json
```

##  Use general terraform commands

Most commonly used onces are below

```bash
terraform init
terraform plan
terraform apply
terraform destroy
```
