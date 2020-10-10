# https://docs.docker.com/engine/security/

1. Docker containers are very similar to LXC containers, and they have similar security features. When you start a container with docker run, behind the scenes Docker creates a set of namespaces and control groups for the container.

2. You can also use DOCKER_HOST=ssh://USER@HOST or ssh -L /path/to/docker.sock:/var/run/docker.sock instead if you prefer SSH over TLS.

3. Finally, if you run Docker on a server, it is recommended to run exclusively Docker on the server, and move all other services within containers controlled by Docker. Of course, it is fine to keep your favorite admin tools (probably at least an SSH server), as well as existing monitoring/supervision processes, such as NRPE and collectd.

4. [Linux kernel capabilities]
a. By default, Docker starts containers with a restricted set of capabilities.

b. Container  Reduces the vectors of attack by malicious users considerably. By default Docker drops all capabilities except those needed, an allowlist instead of a denylist approach.

c. Docker supports the addition and removal of capabilities, allowing use of a non-default profile. This may make Docker more secure through capability removal, or less secure through the addition of capabilities. The best practice for users would be to remove all capabilities except those explicitly required for their processes.

5. [Docker Content Trust Signature Verification]
a. The Docker Engine can be configured to only run signed images. The Docker Content Trust signature verification feature is built directly into the dockerd binary.
This is configured in the Dockerd configuration file.

To enable this feature, trustpinning can be configured in daemon.json, whereby only repositories signed with a user-specified root key can be pulled and run.

This feature provides more insight to administrators than previously available with the CLI for enforcing and performing image signature verification.

6. Docker containers are, by default, quite secure; especially if you run your processes as non-privileged users inside the container.

7. You can add an extra layer of safety by enabling AppArmor, SELinux, GRSEC, or another appropriate hardening system.

8. 