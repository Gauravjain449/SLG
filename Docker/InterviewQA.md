# https://github.com/collabnix/dockerlabs/blob/master/docker/docker-interview-questions.md

1. [What is maximum number of container you can run per host?]
a. This really depends on your environment. The size of your applications as well as the amount of available resources (i.e like CPU) will all affect the number of containers that can be run in your environment. 

b. They do, however, provide a more efficient way of utilizing your resources. The containers themselves are super lightweight (remember, shared OS vs individual OS per container) and only last as long as the process they are running.

2. [Does Docker container package up the entire OS?]
a. Docker containers do not package up the OS. They package up the applications with everything that the application needs to run. The engine is installed on top of the OS running on a host. Containers share the OS kernel allowing a single host to run multiple containers.

3. [Describe how many ways are available to configure Docker daemon?]
There are two ways to configure the Docker daemon:

a. Using a JSON configuration file. This is the preferred option, since it keeps all configurations in a single place.

b. Using flags when starting dockerd. You can use both of these options together as long as you don’t specify the same option both as a flag and in the JSON file. If that happens, the Docker daemon won’t start and prints an error message. 

c. $ dockerd --debug --tls=true --tlscert=/var/docker/server.pem --tlskey=/var/docker/serverkey.pem --host tcp://<Host_IP>:2376


4. [Can you list reasons why Container Networking is so important? Below are top 5 reasons why we need container networking:]
a. Containers need to talk to external world.
b. Allows Containers to talk to host machine.
c. Inter-container connectivity in same host and across hosts.
d. Discover services provided by containers automatically.
e. Load balance traffic between different containers in a service.

5. [How is Dockerfile different from Docker Compose?]
a. Your Docker workflow should be to build a suitable Dockerfile for each image you wish to create, then use compose to assemble the images using the build command.

b. A Dockerfile is a simple text file that contains the commands a user could call to assemble an image whereas Docker Compose is a tool for defining and running multi-container Docker applications.

6. [Can I use JSON instead of YAML for my Docker Compose file?]
a. To use a JSON file with Compose, specify the filename to use, for example: docker-compose -f docker-compose.json up

7. 


