const o = { name: 'Ilya', familyname: 'Goss' };
//console.log(o.familyname);

let promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); // игнорируется
  setTimeout(() => resolve("…")); // игнорируется
});
 