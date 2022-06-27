# NGINX Ingress installation


Verify the version of the Helm client in Cloud Shell:

```bash
helm version
```

Before you deploy the NGINX Ingress Helm chart to the GKE cluster, add the nginx-stable Helm repository in Cloud Shell:

```bash
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
```

Verify that the nginx-ingress-controller Deployment and Service are deployed to the GKE cluster:

```bash
kubectl get deployment nginx-ingress-ingress-nginx-controller
kubectl get service nginx-ingress-ingress-nginx-controller
```

Replace NGINX_INGRESS_IP in ingress.yaml and apply the file in k8s cluster

```bash
kubectl apply -f ingress.yaml
```

## References

- [Reference Documentation Google](https://cloud.google.com/community/tutorials/nginx-ingress-gke)
- [Reference Documentation Nginx](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/)


