const http = require("http");
const server = http.createServer((req, res) => {
    url = req.url;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
        `<h2>Welcome to ${url} page</h2>
          <a href="/index">Index</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          `
    )
    res.end;
});
const port = 5000;
server.listen(port, () => console.log(`Server listening on port ${port}`));
