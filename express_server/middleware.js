const middlewareFunction = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getTime();
    console.log(method, url, time);
    next();
}


const auth = (req, res, next) => {
    const { user } = req.query;

    console.log('userr', req.query);
    console.log('userr2', user);

    if (user === 'john') {
        req.user = { name: 'john', id: 3 }
        next();
    } else {
        res.status(401).send('Unauthorized ')
    }
}

module.exports = {
    middlewareFunction,
    auth
};