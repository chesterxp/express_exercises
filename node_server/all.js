const { readFileSync } = require('fs');
const http = require("http");

const homePage1 = readFileSync('./node_server/index.html');
const css = readFileSync('./node_server/style.css');
const scripts = readFileSync('./node_server/script.js');

const server = http.createServer((req, res) => {
    const url = req.url;
    const homePage = `
    
        <a href="/about">about</a>
        <a href="/html">html</a>
        <a href="/plain">plain</a>
    `

  if (url === "/") {
    res.end(homePage1);
  }
  else if (url === "/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.end(css);
  }
  else if (url === "/script.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.end(scripts);
  }
  else if (url === "/about") {
    const text = "Jakis text na temat about";
    res.end(text);
  }
  else if (url === "/html") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>HTML CONTENT Address: ${req.url}</h1>`);
    res.end();
  } else if (url === "/plain") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("<h1>PLAIN CONTENT Address: ${req.url}</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end(`
        <h1>Ooops!</h1>
        <p>Cos poszlo nie tak</p>
        <p>Nie ma strony ${req.url}</p>
        <a href='/'>HOME</a>
    `);
  }
});

server.listen(5001, () => {
  console.log(`Page is up on adress http://localhost:5001`);
});
