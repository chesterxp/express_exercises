const express = require('express');
const router = express.Router();

// app.use('/api/products/:id', (req, res) => {
//     console.log('req.params.id', req.params.id);
//     const singleProduct = products.find(el => el.id === Number(req.params.id))
//     if (!singleProduct) {
//         res.status('404').send('Product dose not exist')
//     }
//     res.json(singleProduct)
// })

// app.use('/api/products', (req, res) => {
//     // res.writeHead(200, { "content-type": "text/json" });
//     const newProducts = products.map(({id, name, image}) => ({id, name, image}))
//     res.status(200).json(newProducts)
//     // console.log(JSON.stringify(apiData));
//     res.end()
// })
// app.use('/api/products/:id/reviews/:rew_id', (req, res) => {
//     console.log('req.params.id', req.params);//req.params.id { id: '4', rew_id: '2' }
//     res.send('hello world')
// })


// app.use('/api/v1/query', (req, res) => {
//     console.log('Params', req.query);
//     const { search, limit } = req.query;

//     let sortedProducts = [...products];

//     if (search) {
//         sortedProducts = sortedProducts.filter((product) => {
//             return product.name.startsWith(search);
//         })
//     }

//     if (limit) {
//         sortedProducts = sortedProducts.slice(0, Number(limit))
//     }

//     if (sortedProducts.length < 1) {
//         // res.status(200).json({
//         //     products:[]
    
//         // });
//         res.status(200).send('No products matched your search')
//     } else {
//         res.status(200).json(sortedProducts);
//     }


    
//     // res.end('Query params')//Params { name: 'luki', id: '5' }
// })