const { readFile } = require('fs');

console.log('START')
readFile('1.txt', 'utf-8', (e, x) => { console.log(x); readFile('2.txt', 'utf-8', (e, y) => console.log(y)); });
console.log('NEXT');