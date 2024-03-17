// path modules
const path = require('path');
console.log(path.sep);
const filePath = path.join('/data', 'fake', 'fake.txt');
console.log(filePath);
console.log(path.basename(filePath));

console.log(__dirname);
console.log(__filename);