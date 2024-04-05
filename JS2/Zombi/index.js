import Zombie from 'zombie';
const page  = new  Zombie();
let myURL = 'https://kodaktor.ru/g/16032024';
await page.visit(myURL);
console.log(page.document.title);
page.fill('#iii', 'Ilya');
await page.pressButton('button');
console.log(page.document.title);

