## GTG

# to list all running containers
## docker ps

# to list container (including stopped ones)
## docker ps -a 
## docker container ls -a #(management command)

# to remove stopped containers
## docker container prune
# to remove a specific docker container
## docker rm <container-id>

# to list all images we have
## docker images
## docker image ls

# to remove images that dont have an associated docker containers
## docker image prune -a 
# to remove a specific image
## docker rmi <imaged-id>

# to run a container
## docker run <container-name>
# you could also pull it and then run
# docker pull <container-name>

# to check how the conatiner is/went
# get the container id from `docker ps -a`
# the run `docker inspect <container-id>`

# to do port mapping
## docker run -d -p <ext-port:int-port> <image-name>
# then check `docker ps`

# to get interactive terminal
## docker run -it (-d) <image-name> //-d for running in the background
# to get access of the environment
## docker exec -it <container-id> sh //for shell

# to do volume mapping
# docker run -v <your-vol:docker-vol> <image-name>

# to run a particular command in your container, without entering the container
## <docker-run-command> <command-to-execute>

# we can make new images by making Dockerfile
# then we need to build it by running docker build <Dockerfile-directory-location> -t <image-name:tag>

# to create a new network bridge
## docker network create <network-bridge-name>
# check and see if its made properly by listing all network items
## docker network ls
# to connect a container to a network brige
## docker network connect <network-bridge-name/id> <container-name/id>
# check if the container is connected to the bridge by using command `docker inspect <container-name/id>`

# to run all this automatically use docker compose
# to start `docker compose up`
# to stop `docker compose down`

## TYJC
