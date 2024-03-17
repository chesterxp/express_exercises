const express = require('express');
const router = express.Router();

router.get('/login', auth, (req, res) => {
    console.log('user:', req.user);
    // res.status(200).end(`hiiii ${req.user.name} ID: ${req.user.id}`)
    res.status(200).send('You login correct');

})

router.post('/login', (req, res) => {
    console.log(req.body);
    const { name } = req.body;

    if (name) {
        return res.status(200).send(`Wellcom ${name}`);
    } else {
        res.status(404).send('Please provide credentials')
    }
    
})