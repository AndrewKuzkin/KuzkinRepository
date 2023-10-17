// Считываем параметр из командной строки
const NN =  process.argv[2];

// Сделаем хотя бы минимальную верификацию
if (NN == undefined) {
	console.log(`Запустите программку еще раз, добавив через командную строку в качестве параметра любое натуральное число.`);
	return
}                                                                                             ;
const N = parseInt(NN);
if  (Number.isInteger(N) && (N < 0)){
  console.log(`Вы ввели отрицательное число!`, N);  
  return
};
if  (!Number.isInteger(N)){
  console.log(`Введенные данные не удалось преобразовать к целому числу!`, N);
  return
};

// Выведем число, с которым будем работать
console.log("Будем считать, что вы имели в виду: ", N);

// Является ли число простым
function isPrime(n) { 
	if (n<=1) return false;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
}
  
  // Количество простых чисел <= x
  function numberofPrimes(x) {
  let N = 0
    for (let i = 2; i <= x; i++) {
      if (isPrime(i)) N++;
  
    }
    return N
  }
 
  if (isPrime(N)) console.log(N, "- простое число")
else  console.log(N, "- не является простым числом");

console.log(`Количество простых чисел, меньших`, N, numberofPrimes(N));
