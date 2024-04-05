async function task(x) {
    const url = 'https://kodaktor.ru/api/m/';
    const headers = {"Content-Type": "application/json"};

    const response = await fetch(url + x, { headers });
    const data = await response.json();
	console.log(data.result);
};

// Сделаем 10 вызовов. Интересно, что за числа?
for (let i=0;i<10;i++) {
	await task(i)
};

console.log('---');
//А еще раз, но без await
for (let i=0;i<10;i++) {
	 task(i)
};
// Выскакивают те же числа, но последовательность неопределенная