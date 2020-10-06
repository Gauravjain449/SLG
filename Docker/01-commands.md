1. Remove all stopped containers
docker rm $(docker ps -a -q)

2. Delete all containers
docker rm $(docker ps -aq)

3. Delete all images
docker rmi $(docker images -q)

4. Delete all untagged images
docker rmi $(docker images -q --filter "dangling=true")

5. nginx html path 
/usr/share/nginx/html
docker run -v $(pwd)/index.html:/usr/share/nginx/html/index.html -p 1000:80 -d nginx

6. Docker remove all dangling volumes
docker volume rm `docker volume ls -q -f dangling=true`

7. docker build --progress=plain .

8. which-docker
output: /usr/local/bin/docker (show the path of docker)

9. docker swarm init 
activate the docker swarm

10. docker system info

11. docker images --filter "label=com.example.version"

12. docker ps --filter "label=color"
a. filter matches containers with the color label regardless of its value.

13. docker ps --filter "label=color=blue"
a. filter matches containers with the color label with the blue value.

14.  Use docker system prune to clean up multiple types of objects at once.

15. Prune images
a. The docker image prune command allows you to clean up unused images. By default, docker image prune only cleans up dangling images. A dangling image is one that is not tagged and is not referenced by any container.

docker image prune

b. To remove all images which are not used by existing containers, use the -a flag:

docker image prune -a

c. only consider images created more than 24 hours ago:

docker image prune -a --filter "until=24h"

16. Prune containers
a. When you stop a container, it is not automatically removed unless you started it with the --rm flag.

b. Remove all stopped containers.
docker container prune

c.  The following command only removes stopped containers older than 24 hours:
docker container prune --filter "until=24h"

17. Prune volumes
a. Remove all volumes not used by at least one container.
docker volume prune

b. docker volume prune --filter "label!=keep"

18. Prune networks
a. Remove all networks not used by at least one container.

docker network prune

b. Command only removes networks older than 24 hours:

docker network prune --filter "until=24h"

19. Prune everything

a. The docker system prune command is a shortcut that prunes images, containers, and networks. In Docker 17.06.0 and earlier, volumes are also pruned. In Docker 17.06.1 and higher, you must specify the --volumes flag for docker system prune to prune volumes.

docker system prune

b. If you are on Docker 17.06.1 or higher and want to also prune volumes, add the --volumes flag:

docker system prune --volumes

20. docker stats redis1 redis2

# https://docs.docker.com/config/containers/resource_constraints/
21. docker run -it --cpus=".5" ubuntu /bin/bash

22. docker run -it --rm --gpus all ubuntu nvidia-smi





