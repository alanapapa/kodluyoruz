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

-------


## PRODUCTION 1: wp

```
ssh root@**ip**

sudo apt-get update

sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

apt install docker.io

apt install docker-compose

systemctl status docker 

cd /tmp && mkdir web-apps && mkdir web-apps/**domain-name** && cd web-apps/**domain-name**/

vi docker-compose.yml
    ...wp docker-compose yml...

docker-compose up

docker-compose down
```

Reverse Proxy

```
apt install nginx

unlink /etc/nginx/sites-enabled/default

cd /etc/nginx/sites-available/

vi reverse-proxy.conf

    server {
        listen 80;
        listen [::]:80;
        server_name **domain-name.com**;
        server_name_in_redirect off;

        access_log /var/log/nginx/reverse-access.log;
        error_log /var/log/nginx/reverse-error.log;

        location / {
            proxy_set_header Client-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $host;
            proxy_pass http://127.0.0.1:**8080**;
        }
    }


ln -s /etc/nginx/sites-available/reverse-proxy.conf /etc/nginx/sites-enabled/reverse-proxy.conf

nginx -t

systemctl restart nginx

systemctl status nginx

```

```
cd /tmp/web-apps/**domain-name**

docker-compose up
```

***
***

## PRODUCTION 2: sourcecode

```
scp **project-name**.tar ssh root@**ip**:/tmp/web-apps/

chmod 755 **project-name**.tar

tar xf **project-name**.tar

cd **project-name**

docker build . -t **project-name**-app

docker run -p 8090:8080 -d **project-name**-app

cd /etc/nginx/sites-available/

vi reverse-proxy.conf
        ......
        server {
                listen 80;
                listen [::]:80;
                server_name **domain-name.com**;
                server_name_in_redirect off;

                access_log /var/log/nginx/reverse-access.log;
                error_log /var/log/nginx/reverse-error.log;

                location / {
                        proxy_set_header Client-IP $remote_addr;
                        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                        proxy_set_header Host $host;
                        proxy_pass http://127.0.0.1:**8090**;
                }
        }

systemctl restart nginx

```

***


При запуске контейнера с ключом `--rm`, то контейнер автоматом удаляется после завершения.

Чтобы оптимизировать работу докера в Докерфайле нужно сперва отдельно скопировать `package*.json` файлы в раб.директорию, Запустить установку зависимостей `RUN npm install`. И только потом заново скопировать все содержимое проекта в раб.директорию образа.

***
Загрузить в Hub

переименовать образ (just copy):

`docker tag image-name-old dockerHubUsername/image-name-new`


```
docker login

docker push dockerHubUsername/image-name:tag

```

***

В Докерфайле можно указывать переменные через знак `$`:

```
...

ENV PORT 3000

EXPOSE $PORT

...
```

***

`--env-file ./relative/path/filename`

***

Makefile

```
run:
    docker run -d -p 80:80 ... --name container-name image-name:tag
stop:
    docker stop container-name

```

console
```
make run

make stop
```

***

Volumes

Недостаточно просто объявить `VOLUME [ "/app/data" ]`. Так как Volumes бывают анонимные, которые удаляются после удаления контейнера и именованные, которые остаются после удаления контейнера.

Именовать Volume можно во время создания контейнера:

```

docker run -v volume-name:/volumePath/inDockerImage

```


Проверить список Volumes: `docker volume ls`


***

Режиме разработки (dev mode):

Makefile:

```
run:
    docker run -d -p 3000:3000 -v volume-name:/volumePath/inDockerImage --rm --name container-name image-name:tag
run-dev:
    docker run -d -p 3000:3000 <<<v "absolutePath/toProjectFolder:/dockerWorkDir" -v /dockerWorkDir/node_modules>>> -v volume-name:/volumePath/inDockerImage --rm --name container-name image-name:tag
stop:
    docker stop container-name
```