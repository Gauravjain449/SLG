---
1. Simple Compose file 
version: '3'
services:
  nginx:
    image: nginx
    ports:
      - '1000:80'
      - '2000:80'
    volumes:
      - ./index1.html:/usr/share/nginx/html/index1.html
---
2. With External netwok
version: '3'
services:
  dotnetapi:
    build: .
    ports:
      - '1000:80'
    networks: 
      - mysql_default
networks: 
    mysql_default: 
      external: true 
---
