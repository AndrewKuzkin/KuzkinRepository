const o = { name:Promise.resolve('Илья'),   familyname:'Государев'};
async function task(o) {  return o.name};
console.log(await task(o)); // Выполнится асинхронно
console.log(o.familyname); // Выполнится синхронно