const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
  const content = `
<h1>Welcome to ${ctx.path} page!</h1>
<a href="/index">Index</a>
<a href="/about">About</a>
<a href="/contact">Contact</a>
`
  switch (ctx.path) {
    case '/':
      ctx.redirect('/index');
      break
    case '/index':
      ctx.status = 200;
      ctx.body = `${content}`
      break
    case '/about':
      ctx.status = 200;
      ctx.body = `${content}`
      break
    case '/contact':
      ctx.status = 200;
      ctx.body = `${content}`
      break
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});