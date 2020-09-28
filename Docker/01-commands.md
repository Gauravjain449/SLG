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

8. 