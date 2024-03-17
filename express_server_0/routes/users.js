const express = require('express');
const router = express.Router();
const users = [
    {
        name: "Luki"
    },
    {
        name: "Miki"
    },
    {
        name: "Johny"
    }
]

//POKAZ ADRES '/'
router.get('/', (req, res) => {
    // res.send('UserList - method GET');
    //obsługa parametru ?name=LukiZ
    const name = req.query.name;
    console.log('name', name);//LukiZ
    res.json(users);
})
router.get('/new', (req, res) => {
    // res.send('User Form');
    res.render('users/new', {
        firstName: 'Luki King'
    });

})

// WYSLIJ DANE 
router.post('/', (req, res) => {
    //nie zadziała jesli nie damy opcji w middleware
    //app.use(express.urlencoded)

    const isValid = true;
    if (isValid) {
        users.push({
            name: req.body.firstName
        })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log('Error');
        res.render('users/new', {firstName: req.body.firstName})
    }
    
    
    // console.log('name', name);
    // res.send('Create User - method POST')
})


//DYNAMICZNE ADRESY UMIESZCZAMY POD STATYCZNYMI
// ODCZYTANIE PARAMETRU
// router.get('/:id', (req, res) => {
//     const id = req.params.id;
//     res.send(`Get user ID: ${id}`)
// })

// router.put('/:id', (req, res) => {
//     const id = req.params.id;
//     res.send(`Update user ID: ${id}`)
// })

// router.delete('/:id', (req, res) => {
//     const id = req.params.id;
//     res.send(`Delete user ID: ${id}`)
// })

//skrócona wersja
router
    .route('/:id')
    .get((req, res) => {
        const id = req.params.id;
        const user = req.user;
        console.log('user', user);
        res.send(`Get. User ID: ${id}, name: ${user.name}`)
    })
    .put((req, res) => {
        const id = req.params.id;
        res.send(`Update user ID: ${id}`)
    })
    .delete((req, res) => {
        const id = req.params.id;
        res.send(`Delete user ID: ${id}`)
    })

//poniższa linia wykonuje sie gdy ściezka route = id i blokuje strone do funkcji next
//next informuje o przesłaniu response
router.param('id', (req, res, next, id) => {
    console.log('id', id);
    req.user = users[id]
    next();
})

//IMPORTOWANIE WSZYSTKICH ADRESÓW
module.exports = router;