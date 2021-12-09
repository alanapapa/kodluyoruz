```
docker pull ubuntu:18.04
docker run -it ubuntu:18.04
apt-get update
apt-get install curl -y
curl -sL https://deb.nodesourse.com/setup_10.x | bash
apt-get install nodejs -y
cd opt
mkdir node-app
echo 'console.log("hello docker");' > index.js
node index.js
```


***

---
Dockerfile:
~~~
FROM ubuntu:18.04
RUN apt-get update
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesourse.com/setup_10.x | bash
RUN apt-get install nodejs -y
WORKDIR /opt/node-app
COPY . /opt/node-app/
CMD ["node", "index.js"];
~~~
---

terminal:

`docker build . -t <tag(image)-name>`