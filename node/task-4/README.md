## FS File System Modülü

Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.

- employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
- Bu veriyi okuyalım. (READ)
- Bu veriyi güncelleyelim.
- Dosyayı silelim.

~~~nodeJS
> node app.js
> file employees.json created
>
> file employees.json read:
> {"name":"Employee 1 Name","salary":2000} 
>
> file employees.json updated:
> {"name":"Employee 1 Name","salary":2000}
> New content! 
>
> file employees.json deleted
~~~