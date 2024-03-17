const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
// const morgan = require('morgan');
// app.use(morgan('tiny'));
const peopleRouter = require('./routes/people');
const html = `
    <h1>Hello World</h1><br>
    <a href="/about">About</a><br>
    <a href="/products">Produkty</a><br>
    <a href="/status500">status500</a><br>
    <a href="/json">json</a><br>
    <a href="/download">download</a><br>
    <a href="/html">html</a><br>
`;

// const {products} = require('../data/data')

// app.get('/', (req, res) => {
//     console.log('home page');
//     // res.status(200).send(html);
//     res.sendFile(path.resolve(__dirname, './baseWeb/index.html'));//join
// })
//mamy dostęp do lokalnego index.html
app.use(express.static(path.join(__dirname, '/form')))
// app.use(express.static('../express_server/form'))
// app.use(express.static('./express/baseWeb'))

//mamy dostep do danych wysyłanych post, put delete -> req.body
//wsparcie formularzy
app.use(express.urlencoded({ extended: false }));
//wspacie jsona w req body
app.use(express.json());
//routing

app.use('/api/people/', peopleRouter);


app.all('*', (req, res) => {
    console.log(req.url);
    res.status(404).send(`<h1>Resource ${req.url} not found`,);
})

app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT}`);
})