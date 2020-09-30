# https://docs.docker.com/engine/install/ubuntu/

--- start
1. Uninstall old versions

sudo apt-get remove docker docker-engine docker.io containerd runc

 ** The contents of /var/lib/docker/, including images, containers, volumes, and networks, are preserved. The Docker Engine package is now called docker-ce

2. sudo apt-get update

3. sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common


4. curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

5. sudo apt-key fingerprint 0EBFCD88

6. sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

7. sudo apt-get update

8. sudo apt-get install docker-ce docker-ce-cli containerd.io

--- Done

9. Docker Engine is installed and running. The docker group is created but no users are added to it. You need to use sudo to run Docker commands. 

10. Allow non-privileged users to run Docker commands and for other optional configuration steps.

# https://docs.docker.com/engine/install/linux-postinstall/

a. The Docker daemon binds to a Unix socket instead of a TCP port. By default that Unix socket is owned by the user root and other users can only access it using sudo. The Docker daemon always runs as the root user.

b. If you don’t want to preface the docker command with sudo, create a Unix group called docker and add users to it. When the Docker daemon starts, it creates a Unix socket accessible by members of the docker group.

c. --- start

sudo groupadd docker

sudo usermod -aG docker $USER

--- End

d. Log out and log back in so that your group membership is re-evaluated.
e. If testing on a virtual machine, it may be necessary to restart the virtual machine for changes to take effect.
# OR
f. On Linux, you can also run the following command to activate the changes to groups:

$ newgrp docker 



