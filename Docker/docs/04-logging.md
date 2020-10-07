# https://docs.docker.com/config/containers/logging/


1. [View logs for a container or service]
a. If you use a logging driver which sends logs to a file, an external host, a database, or another logging back-end, docker logs may not show useful information.

b. If your image runs a non-interactive process such as a web server or a database, that application may send its output to log files instead of STDOUT and STDERR.

2. [Configure logging drivers]
a. To find the current default logging driver for the Docker daemon, run docker info and search for Logging Driver

b. You can use the following command [Try]
$ docker info --format '{{.LoggingDriver}}'

c. The following example starts an Alpine container with the none logging driver.
$ docker run -it --log-driver none alpine ash

d. To find the current logging driver for a running container, if the daemon is using the json-file logging driver, run the following docker inspect command, substituting the container name or ID for <CONTAINER>:
$ docker inspect -f '{{.HostConfig.LogConfig.Type}}' <CONTAINER>

3. [Supported logging drivers]
# Ref: Supported logging drivers.jpg