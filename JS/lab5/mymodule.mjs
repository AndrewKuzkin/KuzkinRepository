export function task(x) { 
  return (x >= 18) ? Promise.reject('no') : (x !== 0) ? Promise.resolve('yes') : Promise.resolve(new Date().toISOString().split('T')[0].split('-').reverse().join('.')); 
};
//console.log(task(19));