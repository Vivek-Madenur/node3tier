# Sample 3tier app
This repo contains code for a Node.js multi-tier application.

The application overview is as follows

```
web <=> api <=> db
```

The folders `web` and `api` respectively describe how to install and run each app.


# Steps to test locally using Docker Engine

1. Create a Postgres DB locally or in cloud

2. Configure DB parameter as ENV variables in the Dockerfile found in /api folder

4. Configure API_HOST as ENV variables in the Dockerfile found in /web folder. The host name (api) should be the name of the container which will be created later.
```
API_HOST=http://api:3000
```

5. Build API container image by navigating to /api folder and running the below command
```
docker build . -t node3tier-api
```

6. Build WEB container image by navigating to /web folder and running the below command
```
docker build . -t node3tier-web
```

7. Run both the containers
```
docker run -d -p 3000:3000 --name api  node3tier-api
docker run  -p 3001:3001 --name web node3tier-web
```

8. At this point web container will NOT be able to communicate with api container. So create a network and add both the containers to it
```
docker network create app-newtrok
docker network connect app-newtrok api
docker network connect app-newtrok web
```

9. Now you can access both the containers successfully.

