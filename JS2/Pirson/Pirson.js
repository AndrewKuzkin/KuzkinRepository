function pirson(x, y) {
const n = x.length;
const meanX = x.reduce((acc, val) => acc + val, 0) / n;
const meanY = y.reduce((acc, val) => acc + val, 0) / n;
let numerator = 0;
  let denominatorX = 0;
  let denominatorY = 0;
  for (let i = 0; i < n; i++) {
    const diffX = x[i] - meanX;
    const diffY = y[i] - meanY;
    numerator += diffX * diffY;
    denominatorX += diffX * diffX;
    denominatorY += diffY * diffY;
  }
  const correlation =
    numerator / (Math.sqrt(denominatorX) * Math.sqrt(denominatorY));
    return Math.abs(correlation);
}

const x = [26, 4, 3, 24, 16, 21, 13, 8, 19, 11, 9, 15, 1, 25, 5, 28, 18, 2, 66, 7, 14, 6, 22, 3, 20, 17, 27, 12];
const y = [55, 11, 23, 51, 35, 45, 29, 19, 41, 25, 21, 33, 5, 53, 13, 59, 39, 7, 49, 17, 31, 15, 47, 9, 43, 37, 57, 25];
const corr = pirson(x, y).toFixed(2);
console.log('Корреляция Пирсона:', corr);