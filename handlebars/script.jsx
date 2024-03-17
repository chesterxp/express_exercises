console.log('Luki handlerbars');
// var arr = [
//     {
//         name: 'Luki developer'
//     },
//     ['1','2','3']
// ]

const btn = document.querySelector('#button');
btn.addEventListener('click', fill_template)

function fill_template() {
    console.log('fill');
    var data = {
        title: 'why handlebars is cool',
        list: [
            {
                name: 'name1'
            },
            {
                name: 'name2'
            },
            {
                name: 'name3'
            },
            {
                name: 'name4'
            }
        ],
        footer: 'Footerrrrrrr'
    };
    //template
    var templateBox = document.querySelector('#template').innerHTML;
    //przygotowanie template
    var template = Handlebars.compile(templateBox);
    //wypełnienie danymi
    var filled = template(data);
    // var filled = template(data, {
    //     // noEscape: true//działaja <br> w zmiennych/w tekscie
    // });
    document.querySelector('#output').innerHTML = filled;
}