	const o = { name: 'Илья',  familyname:'Государев'};

let promise = new Promise(function  task(resolve, reject) {
  resolve(console.log(o.familyname));

  reject(new Error("Error!")); // игнорируется
//setTimeout(() => resolve(o), 15000); // игнорируется
});

 