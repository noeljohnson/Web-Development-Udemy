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

## TYJC
