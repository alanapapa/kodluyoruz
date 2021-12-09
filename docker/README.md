`docker pull <image-name>`    -   install

`docker run <image-name> `    -   run or install and run

`docker images`  -    all installed images

`docker run -it <image-name>`     -   run interactive teminal

`docker ps (docker container ls)`    -  all active containers (ps = process)

`docker ps -a (docker container ls -a)`   -   all runned containers

`docker run -it --name some_name <image-name> `  -   run container with fixed name

`docker start <container-id or container-name>`   -   start

`docker stop <container-id or container-name> `   -   stop

`docker rm <container-id or container-name> `   -    remove

`docker container rm $(docker container ls -aq)`  -   remove all

`docker run <image-name>:<tag-name>` - run fix tag version

`docker image tag <image-name> <my-image-name>`    -   create copy of image

`docker rmi <image-name>`     -   remove image

`docker run -d  <image-name>` - run image (deamon) detach mode

`docker attach <container-id>`    -   attach

`docker container logs <container-id>`    -   logs

`docker run -p <external:internal> <image-name>`    -   run with port (3001:3000), port mapping

***

`docker run -v /opt/data:/data/db mongo`  -   volume mount (not stateless)
`docker inspect <container-id>`   -   all info about container
`docker run -e MYSQL_ROOT_PASSWORD=test123 -d mysql`     -  environment  

***

`docker run --name mysql-server -p 3306:3306 -v /opt/data:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=test123 -d mysql`
`docker run --name pmyadmin -p 8000:80 --link mysql-server:db -d phpmyadmin/phpmyadmin`

***

Docker Network Types:

1. **Bridge**   -   default -   `docker run mongo`
2. **None**     -  `docker run mongo --network=none`
3. **Host**     -   `docker run mongo --network=host`

***

`docker network create --driver bridge --subnet 182.18.0.0/16 --gateaway 182.18.0.1 todo-app-network`

`docker network list ` (or ls)   -       networks list

`docker network rm <network-name>`    -  remove network

---

`--link containerName:alias`

При каждом запуске докер может присвоить разные IP. Поэтому в коде вместо localhost или IP адреса нужно писать имя контейнера.  

        ....
        await Mongoose.connect("mongodb://<container-name>:27017/todos", {
        .... });


`docker inspect bridge `  -   all info about network type

`docker inspect <network-id>`     -   all info about network

`docker network create --driver bridge --subnet 182.18.0.1/24 --gateway 182.18.0.1 custom-network`

`docker run --name <container-name> --net <network name> ... -d mongo`

`docker run --net <network-name> -p 3000:3000 alanapapa/todo-app`

***

`docker <container or images or network> prune`         -       delete all

***

`docker-compose build`

`docker-compose up`

`docker-compose down`

***