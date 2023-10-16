// Считываем параметр из командной строки
const N =  process.argv[2];

// Выведем его, чтобы убедиться, что все нормально
console.log("Введенное число: ", N);

// Является ли число простым
function isPrime(n) { 
	if (n==1) return false;
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
 
  if (isPrime(N)) {
    console.log(N, "- простое число")
  }
  else  console.log(N, "- не является простым числом");
