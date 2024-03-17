const express = require('express');
const app = express();

const PORT = 3000;

const html = `
    <h1>Hello World</h1><br>
    <a href="/products">Produkty</a><br>
    <a href="/status500">status500</a><br>
    <a href="/json">json</a><br>
    <a href="/download">download</a><br>
    <a href="/html">html</a><br>
`;



app.set('view engine', 'ejs');

//funkcja musi byc nad innymi endpointami aby zadziałała
app.use(logger)

//wywołanie funkcji tylko dla konkretnego endpointa
// app.get('/', logger, (req, res) => {
//     console.log('default route');

//     res.send(html);
// })

app.get('/', (req, res) => {
    console.log('default route');

    res.send(html);
})

//serwowanie statycznych plików
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
//wykorzystanie json
app.use(express.json())

app.get('/products', (req, res) => {
    console.log('products route');

    res.send([
        {
            id: 1,
            name: "product1"
        },
        {
            id: 2,
            name: "product2"
        },
        {
            id: 3,
            name: "product3"
        },
        {
            id: 4,
            name: "product4"
        },
    ]);
})

app.get('/status500', (req, res) => {
    console.log('status 500');
    res.status(500).send('Server 500 - chain methods')
})

app.get('/json', (req, res) => {
    console.log('send json');
    res.status(200).json({
        message: 'Json code'
    })
})
app.get('/download', (req, res) => {
    console.log('download');
    res.download('./assets/skroty-VSC.txt');
})

//generowanie dynamicznej strony z folderu VIEWS
app.get('/html', (req, res) => {
    console.log('html');
    res.render('template1', {
        text: "Luki World2"
    });
})

const userRouter = require('./routes/users');
// const htmRouter = require('./routes/htm');

app.use('/users', userRouter);
// app.use('/htm', htmRouter);

//funkcja która bedzie wykonywała się pomiedzy każdym req i res
function logger(req, res, next) {
    console.log('adress', req.originalUrl);
    next();
}

app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT}`);
})