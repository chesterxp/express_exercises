const { readFile, writeFile } = require('fs');

readFile('../data/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log('ERror', err);
        return
    }
    // else {
    //     console.log('result', result);
    // }
    // console.log(result);

    // const second = result;

    writeFile(
        '../data/result-async.txt',//gdzie
        'nowy text do pliku',//co a byc wpisane
        (err, result) => {//co zrobic dodatkowego
        if (err) {
            console.log('error2', err);
            return
        }

        console.log('result2', result);
    })
})




