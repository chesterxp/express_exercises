//wywołaj w middleware funkcje
app.use(middlewareFunction)

app.use([middlewareFunction, auth])

app.get('/luki', auth, (req, res) => {
    console.log('reqqq', req.user);
    res.status(200).end(`hiiii ${req.user.name} ID: ${req.user.id}`)
})