const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');

// var livereload = require("livereload");
// var connectLiveReload = require("connect-livereload");

// const liveReloadServer = livereload.createServer();
// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });

// app.use(connectLiveReload());
const nav = {
    "iconsHashtag": {
      "hash": "NavIco"
    },
    "extraLogo": {
      "img": "234567892137",
      "url": "wiedzmin.pl",
      "name": "Wiedźmin1",
      "active": true,
      "details": {
        "img": "https://static.im-g.pl/im/4/30498/m30498854,1212-NSI-EUROAGD-LOGO-45PX.png",
        "url": "https://www.gazeta.pl/0,0.html",
        "name": "Logo Dodatkowe"
      }
    },
    "linksHashtag": {
      "hash": "NavLinks"
    },
    "logo": {
      "img": "https://bi.im-g.pl/im/9/22336/m22336899.png",
      "url": "https://www.gazeta.pl/0,0.html",
      "name": "GAZETA.pl - Wiadomości, Rozrywka, Forum, Poczta"
    },
    "links": {
      "mobile": [
        {
          "name": "Wiadomości",
          "anchor": "Wiadomości"
        },
        {
          "name": "Sport",
          "anchor": "Sport"
        },
        {
          "name": "Next",
          "anchor": "Next"
        },
        {
          "name": "Wiad. lokalne",
          "anchor": "Wiadomości lokalne"
        },
        {
          "name": "Styl Życia",
          "anchor": "Styl Życia"
        },
        {
          "name": "Plotek",
          "anchor": "Plotek"
        },
        {
          "name": "Kultura",
          "anchor": "Kultura"
        },
        {
          "name": "Moto",
          "anchor": "Moto"
        }
      ],
      "desktop": [
        {
          "url": "https://wiadomosci.gazeta.pl/wiadomosci/0,0.html",
          "name": "Wiadomości"
        },
        {
          "url": "https://www.sport.pl/sport-hp/0,0.html",
          "name": "Sport"
        },
        {
          "url": "https://next.gazeta.pl/next/0,0.html",
          "name": "Next"
        },
        {
          "url": "https://wyborcza.pl/0,0.html",
          "name": "Wyborcza.pl"
        },
        {
          "url": "https://kobieta.gazeta.pl/kobieta/0,0.html",
          "name": "Kobieta"
        }
      ]
    },
    "cycles": {
      "active": true
    },
    "icons": [
      {
        "img": "https://static.im-g.pl/im/2/30574/m30574022,NAVIGATION-POCZTA.png",
        "url": "https://oauth.gazeta.pl/poczta/auth",
        "name": "Poczta"
      },
      {
        "img": " https://static.im-g.pl/im/6/30574/m30574026,NAVIGATION-FORUM.png",
        "url": "http://forum.gazeta.pl/forum/0,0.html",
        "name": "Forum"
      },
      {
        "img": "https://static.im-g.pl/im/0/30574/m30574030,NAVIGATION-OKAZJE.png",
        "url": "https://zakupy.avanti24.pl/",
        "name": "Okazje"
      },
      {
        "img": "https://static.im-g.pl/im/4/30574/m30574024,NAVIGATION-SZUKAJ.png",
        "url": "http://szukaj.gazeta.pl/wyszukaj/artykul",
        "name": "Szukaj"
      },
      {
        "img": "https://static.im-g.pl/im/8/30574/m30574028,NAVIGATION-LEAF.png",
        "url": "http://zielona.gazeta.pl/zielona_gazeta/0,0.html",
        "name": "Środowisko"
      }
    ]
  }

const luki = {
    name: 'Luki',
    age: 30,
    car: true,
    isPet: false,
    pet: {
        
        type: 'dog',
        name: 'Kokos'
    },
    people: [
        'john',
        'anna',
        'monica',
        'jix',
    ],
    users: [
        {
            name: 'john',
            age: 31
        },
        {
            name: 'sara',
            age: 32
        },
        {
            name: 'jix',
            age: 33
        },
    ],
    user: {
        name: 'luki',
        age: 30,
        car: {
            isHave: true,
            name: 'VW',
            speed: {
                max: 220
            }
        }
    },
    lists: [
        {
            items: ['mango', 'banana', 'pineapple']
        },
        {
            items: ['potato', 'tomato', 'garic']
        },
    ],
    tripleBrackets: '<h1>tripleBrackets</h1>',
}
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
const hbs = exphbs.create({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, 'views/layoutCustom'),
    partialsDir: path.join(__dirname, 'views/partialCustom'),
    extname: '.hbs',

    //custoom helper
    helpers: {
        calculation: function (value) {
            return value + 7;
        },
        list: function (value, options) {
            return `<h1>${options.fn({test: value, test2: 'dodatkowa wartość'})}</h1>`
        }
    }
})

app.engine('hbs', hbs.engine);
// app.engine('hbs', exphbs.engine({
//     defaultLayout: "main",
//     layoutsDir: path.join(__dirname, 'views/layoutCustom'),
//     partialsDir: path.join(__dirname, 'views/partialCustom'),
//     extname: '.hbs'
// }));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // res.send('Hello world1');
    res.render('index', {title: 'Home Page'})
})

app.get('/about', (req, res) => {
    // res.send('Hello world1');
    res.render('about', {title: 'About Page', ...luki})
})

app.listen(3001, () => {
    console.log('serwer start at port http://localhost:3001/');
})

// {
//     // extname: '.hbs',
//     // defaultLayout: "main"
// }