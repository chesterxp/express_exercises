//pobieramy funkcje
const { middlewareFunction, auth } = require('./middleware')
//wywołaj w middleware funkcje
app.use(middlewareFunction)
app.use(auth)

//pokaze sie tylko na adresach zaczynajacych sie od apy/ (ale wycina apy)
app.use('/apy',middlewareFunction)