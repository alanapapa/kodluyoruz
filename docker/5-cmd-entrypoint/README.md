Можно перезаписать CMD через аналогичную команду в командной строку (overwrite)

docker build . -t ubuntu-sleeper

~~CMD ["sleep", "4"] в Dockerfile~~

docker run ubuntu-sleeper **sleep 2**


Так же с Env.

***

ENTRYPOINT для постоянного ключа с разными аргументами.

*ENTRYPOINT ["sleep"] в Dockerfile*

docker build . -t ubuntu-sleeper

docker run ubuntu-sleeper **2**

Нет необходимости каждый раз перезаписывать постоянную команду `sleep`.

Важно! Так как ENTRYPOINT постоянная команда, программа не запустится без ее аргумента. Выдаст ошибку missing operand.
Чтобы поставить ENTRYPOINT-у дефолтное значение нужно после него прописать значение через CMD.