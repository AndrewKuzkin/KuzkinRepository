import { transform } from '@babel/core';

function f(x) { return x * 2; }

//конвейер
const newcode = '8 |> f |> Math.sqrt |> console.log';

const { code } = transform(newcode, { plugins: [['@babel/proposal-pipeline-operator', { proposal: 'minimal' }]] });

// Интересно, что там будет?
 console.log(code);

//Вычисляет  корень из 16 в итоге
eval(code);