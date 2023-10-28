import { readFile } from 'node:fs/promises';

console.log('START');
let x = await readFile('1.txt', 'utf-8');
let y = await readFile('2.txt', 'utf-8');
console.log(x);
console.log(y);
console.log('END');