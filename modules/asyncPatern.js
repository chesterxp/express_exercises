const {readFile, writeFile} = require('fs').promises
// const util = require('util');

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readFile('../data/first.txt', 'utf8');
        const second = await readFile('../data/second.txt', 'utf8');

        console.log('FIRST', first);
        console.log('Second', second);
        await writeFile('../data/result-async2.txt', `New text with data
         ${first}
         ${second}`)
    } catch(error) {
        console.log('Error', error);
    }
}

start();

//podejście z wykorzystaniem ustlis
// const {readFile, writeFile} = require('fs');
// const util = require('util');

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async() => {
//     try {
//         const first = await readFilePromise('../data/first.txt', 'utf8');
//         const second = await readFilePromise('../data/second.txt', 'utf8');

//         console.log('FIRST', first);
//         console.log('Second', second);
//         await writeFilePromise('../data/result-async2.txt', `New text with data
//          ${first}
//          ${second}`)
//     } catch(error) {
//         console.log('Error', error);
//     }
// }

// start();



//podstawowe podejście
// getText('../data/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log('Error', err))


//async/await
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// const start = async() => {
    

//     try {
//         const first = await getText('../data/first.txt');
//         const second = await getText('../data/second.txt');

//         console.log('FIRST', first);
//         console.log('Second', second);
//     } catch(error) {
//         console.log('Error', error);
//     }
// }

// start();