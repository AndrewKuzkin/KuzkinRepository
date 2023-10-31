import moment from 'moment';
let m = moment().format('DDMMYYYY');
const o = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86, 89];
//хотел написать вот так:
//cons t { '28':eval(m)} = { ...o };
// :-(
const {'28':n31102023} = { ...o };
console.log(n31102023);