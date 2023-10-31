function task (obj) {
let o = obj;
    if (o === null) {
			const date = new Date();
        return `${date.getDate() < 9 ? '0' : ''}${date.getDate()}.${date.getMonth() < 9 ? '0' : ''}${date.getMonth() + 1}.${date.getFullYear()}`;

    };

    let n = 0;
    while (o.__proto__ !== null) {
		n++;
		o = o.__proto__;
	};
        return n ;
    };


const first = {};
const second = Object.create(first);
const third = Object.create(second);

console.log(task(third));
console.log(task(null));