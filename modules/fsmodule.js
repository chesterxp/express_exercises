//fs module
const { readFileSync, writeFileSync } = require('fs');
const first = readFileSync('./data/first.txt', 'utf8')
const second = readFileSync('./data/second.txt', 'utf8')

console.log(first);
console.log(second);

writeFileSync('./data/result-sync.txt', `here is the result: ${first}`, {flag: 'a'})//flaga dopisuej text/bez nadpisujemy całą zawartość