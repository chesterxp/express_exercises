//http://localhost:3000/api/v1/query?limit=2&search=a


// [
//     {
//     id: 1,
//     name: "albany sofa",
//     image: "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
//     price: 39.95,
//     desc: "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
//     },
//     {
//     id: 3,
//     name: "albany sectional",
//     image: "https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg",
//     price: 10.99,
//     desc: "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
//     }
// ]
    

app.use('/api/v1/query', (req, res) => {
    console.log('Params', req.query);
    const { search, limit } = req.query;

    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if (sortedProducts.length < 1) {
        // res.status(200).json({
        //     products:[]
    
        // });
        res.status(200).send('No products matched your search')
    } else {
        res.status(200).json(sortedProducts);
    }


    
    // res.end('Query params')//Params { name: 'luki', id: '5' }
})