# https://docs.docker.com/config/daemon/

1. Start the daemon manually: 

$ dockerd


2. Configure the Docker daemon:

a. There are two ways to configure the Docker daemon:

-- Use a JSON configuration file. This is the preferred option, since it keeps all configurations in a single place.

-- Use flags when starting dockerd.

3. To configure the Docker daemon using a JSON file, create a file at

-- /etc/docker/daemon.json on Linux systems, or

-- C:\ProgramData\docker\config\daemon.json on Windows.

-- Here’s what the configuration file looks like:

{
  "debug": true,
  "tls": true,
  "tlscert": "/var/docker/server.pem",
  "tlskey": "/var/docker/serverkey.pem",
  "hosts": ["tcp://192.168.59.3:2376"]
}


4. You can also start the Docker daemon manually and configure it using flags.

Here’s an example of how to manually start the Docker daemon, using the same configurations as above:

dockerd --debug \
  --tls=true \
  --tlscert=/var/docker/server.pem \
  --tlskey=/var/docker/serverkey.pem \
  --host tcp://192.168.59.3:2376

5. dockerd --help

[Docker daemon directory]
6. The Docker daemon persists all data in a single directory. This tracks everything related to Docker, including containers, images, volumes, service definition, and secrets.

a. By default this directory is:

-- /var/lib/docker on Linux.
-- C:\ProgramData\docker on Windows.

7. You can configure the Docker daemon to use a different directory, using the data-root configuration option.

8. Note: 
Since the state of a Docker daemon is kept on this directory, make sure you use a dedicated directory for each daemon. If two daemons share the same directory, for example, an NFS share, you are going to experience errors that are difficult to troubleshoot.

[Troubleshoot the daemon]
9. USE THE HOSTS KEY IN DAEMON.JSON WITH SYSTEMD

-- /etc/systemd/system/docker.service.d/docker.conf

[Control Docker with systemd]
10. Start the Docker daemon:
a. Start manually: 
--
Once Docker is installed, you need to start the Docker daemon. Most Linux distributions use systemctl to start services. If you do not have systemctl, use the service command.

systemctl:

$ sudo systemctl start docker
service:

$ sudo service docker start
--

11. Custom Docker daemon options:
a. There are a number of ways to configure the daemon flags and environment variables for your Docker daemon. The recommended way is to use the platform-independent daemon.json file, which is located in /etc/docker/ on Linux by default. 

b. You can configure nearly all daemon configuration options using daemon.json. One thing you cannot configure using daemon.json mechanism is a HTTP proxy.

12. Runtime directory and storage driver:
a. You may want to control the disk space used for Docker images, containers, and volumes by moving it to a separate partition.

To accomplish this, set the following flags in the daemon.json file:

{
    "data-root": "/mnt/docker-data",
    "storage-driver": "overlay2"
}

13. HTTP/HTTPS proxy

a. The Docker daemon uses the HTTP_PROXY, HTTPS_PROXY, and NO_PROXY environmental variables in its start-up environment to configure HTTP or HTTPS proxy behavior. You cannot configure these environment variables using the daemon.json file.

# Ref: https://docs.docker.com/config/daemon/systemd/

--------



