app.use('/api/products/:id', (req, res) => {
    console.log('req.params.id', req.params.id);
    const singleProduct = products.find(el => el.id === Number(req.params.id))
    if (!singleProduct) {
        res.status('404').send('Product dose not exist')
    }
    res.json(singleProduct)
})

app.use('/api/products', (req, res) => {
    // res.writeHead(200, { "content-type": "text/json" });
    const newProducts = products.map(({id, name, image}) => ({id, name, image}))
    res.status(200).json(newProducts)
    // console.log(JSON.stringify(apiData));
    res.end()
})