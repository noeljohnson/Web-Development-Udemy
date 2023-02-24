## GTG

# These are the following docker components

  #docker client : From which you issue commands, these will be issued to the server and the server will do the rest
  #docker server : This will set up the start process, will run containers and stuff. This needs to be switched on before the docker clients executes commands
  #docker host: this is where the docker server runs, for linux its linux itself but for other OS its linux virtual machine. Check `ipconfig` for seeing its default ip address allocated
  #docker images: This are set of read only files used for making docker containers. All docker images present will be listed in the `docker images` command
  #docker conatiner: These are launched by docker images, once they are running they will be listed in the `docker ps` command. Once inside a container you can change files inside it
  #docker respository: will have diffrent versions of the docker image, this can be noted by its tag, if you have two docker images of the same service, then thier docker tag probably diffrent
  #docker registry: the github of docker. Conatins diffrent docker repositories. Can download repos that are publicly available here.

  # there are many docker commands, to organize this docker management commands were introduced. When using a management command, we write `docker <management-command> <sub-options>`. Management commands are listed while running `docker` along with docker commands. To get help for a specific docker command used `<docker command/management-command> --help`

## TYJC
