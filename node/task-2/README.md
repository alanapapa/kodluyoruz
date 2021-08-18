## Post Sıralama ve Post Ekleme

Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.

- Postları dizin içerisinde bulunan nesneler şeklinde oluşturalım.
- Post nesnesi şablonu {title: 'Post Başlık 1', detail: 'Post Detay 1'} olarak düşünülebilir.
- Promise ve Async - Await yöntemleri ile ayrı ayrı yapalım.

~~~nodeJS
> node async.js || node promise.js
> 1-Title 
> 1-Content 
>
> ---
>
> 2-Title 
> 2-Content 
>
> ---
>
> 3-Title 
> 3-Content 
>
> ---
~~~

---

~~~nodeJS
> node async.js newPostTitle newPostContent || node promise.js newPostTitle newPostContent
> 1-Title 
> 1-Content 
>
> ---
>
> 2-Title 
> 2-Content 
>
> ---
>
> 3-Title 
> 3-Content 
>
> ---
> 
> newPostTitle
> newPostContent
>
> ---
~~~