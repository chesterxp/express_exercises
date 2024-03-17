const http = require('http');
const server = http.createServer((req, res) => {
    // res.write('welcome to ma web page');
    // res.end();

    if (req.url === '/') {
        res.end('Home page')
    }
    if (req.url === '/about') {
        res.end('About page2')
    }

    res.end(`
        <h1>Ooops!</h1>
        <p>Cos poszło nie tak</p>
        <a href='/'>HOME</a>
    `)
})

server.listen(5000)