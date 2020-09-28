# https://docs.docker.com/develop/develop-images/build_enhancements/

1.  Docker Build enhancements for 18.09 release introduces By integrating BuildKit, users should see an improvement on performance, storage management, feature functionality, and security.

2.  The new --secret command line option allows the user to pass secret information for building new images with a specified Dockerfile

3.  Requirements
    a. A current version of Docker (18.09 or higher)

4.  Limitations
    a. Only supported for building Linux containers

5.  # To enable BuildKit builds
    a. Easiest way from a fresh install of docker is to set the DOCKER_BUILDKIT=1 environment variable when invoking the docker build command, such as:

# \$ DOCKER_BUILDKIT=1 docker build .

b. To enable docker BuildKit by default, set daemon configuration in

# /etc/docker/daemon.json

feature to true and restart the daemon:

{ "features": { "buildkit": true } }
