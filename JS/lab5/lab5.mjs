import { task } from './mymodule.mjs';

console.log(await task(1));       // 'yes'
console.log(await task(0));       // '25.10.2023'
console.log(await task(17));      // 'yes'


try {
 console.log(await task(18));      // ERROR 'no'
} catch (e) {
 console.log(e);
}