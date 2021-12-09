```
docker build . -t todo-app
docker run --name mongo-server -p 27017:27017 -d mongo:4.4.6
docker run -p 4000:4000 --link mongo-server:mongo-alias todo-app
```