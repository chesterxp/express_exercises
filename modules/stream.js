const { createReadStream } = require('fs');
const stream = createReadStream('../data/bigFile.txt', {
    highWaterMark: 90000
});

stream.on('data', (result) => {
    console.log(result);
})
