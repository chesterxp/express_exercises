// const { createReadStream } = require('fs');
// const stream = createReadStream('./data/bigFile.txt', {
//     highWaterMark: 90000
// });

// stream.on('data', (result) => {
//     console.log(result);
// })

// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
//     // const text = fs.readFileSync('./data/bigFile.txt', 'utf8')
//     // res.end(text);

//     const fileStream = fs.createReadStream('./data/bigFile.txt', 'utf8');
//     fileStream.on('open', () => {
//         fileStream.pipe(res)
//     })
//     fileStream.on('error', (error) => {
//         res.end(error)
//     })
// }).listen(5000, () => {
//     console.log(`Server start at port: http://localhost:5000`);
// })