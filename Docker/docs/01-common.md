
# https://docs.docker.com/config/labels-custom-metadata/
1. Labels on images, containers, local daemons, volumes, and networks are static for the lifetime of the object. To change these labels you must recreate the object. Labels on swarm nodes and services can be updated dynamically.

# https://docs.docker.com/config/containers/start-containers-automatically/
2. docker run -d --restart unless-stopped redis
starts a Redis container and configures it to always restart unless it is explicitly stopped or Docker is restarted.

3. docker update --restart unless-stopped redis
This command changes the restart policy for an already running container named redis

4. docker update --restart unless-stopped $(docker ps -q)

And this command will ensure all currently running containers will be restarted unless stopped.

5. Restart policies are different from the --live-restore flag of the dockerd command. Using --live-restore allows you to keep your containers running during a Docker upgrade, though networking and user input are interrupted.

6. Restart Policy Types:
a. no -- Do not automatically restart the container. (the default)
b. on-failure -- Restart the container if it exits due to an error, which manifests as a non-zero exit code.
c. always -- Always restart the container if it stops. If it is manually stopped, it is restarted only when Docker daemon restarts or the container itself is manually restarted. 
d. unless-stopped -- Similar to always, except that when the container is stopped (manually or otherwise), it is not restarted even after Docker daemon restarts.

7. [Keep containers alive during daemon downtime]

8. [Runtime metrics]

9. [GPU] : https://docs.docker.com/config/containers/resource_constraints/


