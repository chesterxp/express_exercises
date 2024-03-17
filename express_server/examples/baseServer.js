const express = require('express');
const app = express();
const PORT = 3000;
const html = `
    <h1>Hello World</h1><br>
    <a href="/about">About</a><br>
    <a href="/products">Produkty</a><br>
    <a href="/status500">status500</a><br>
    <a href="/json">json</a><br>
    <a href="/download">download</a><br>
    <a href="/html">html</a><br>
`;

app.get('/', (req, res) => {
    console.log(req.url);

    res.status(200).send(html);
})

app.get('/about', (req, res) => {
    console.log(req.url);
    res.status(200).send('ABOUT PAGE  <a href="/">home</a><br>');
})

app.all('*', (req, res) => {
    console.log(req.url);
    res.status(404).send(`<h1>Resource ${req.url} not found`, );
})

app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT}`);
})