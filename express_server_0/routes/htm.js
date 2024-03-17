const express = require('express');
const app = express();
const router = express.Router();

app.use(express.static('public'))
router.get('/', (req, res) => {
    res.send('htm')
})

//POKAZ ADRES '/'
// router.get('/', (req, res) => {
//     res.send('UserList')
// })

module.exports = router;