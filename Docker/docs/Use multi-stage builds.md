# https://docs.docker.com/develop/develop-images/multistage-build/

1. Use an external image as a “stage”
a. When using multi-stage builds, you are not limited to copying from stages you created earlier in your Dockerfile. You can use the COPY --from instruction to copy from a separate image, either using the local image name, a tag available locally or on a Docker registry, or a tag ID. The Docker client pulls the image if necessary and copies the artifact from there. The syntax is:

** COPY --from=nginx:latest /etc/nginx/nginx.conf /nginx.conf

2. Use a previous stage as a new stage

---
FROM alpine:latest as builder
RUN apk --no-cache add build-base

FROM builder as build1
COPY source1.cpp source.cpp
RUN g++ -o /binary source.cpp

FROM builder as build2
COPY source2.cpp source.cpp
RUN g++ -o /binary source.cpp
---

3. 
