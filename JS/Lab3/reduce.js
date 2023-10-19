function Factorial(m) {

var a = [];
// Заполняем массив a числами от 1 до m
for (let i = 0; i < m; i++) {
    a[i] = i +1;
};

return a.reduce(function (first, second, index) {return first * second }, 1)
}

// Берем факториал от m
const m = 10;
console.log(m, `!=`, Factorial(m))
