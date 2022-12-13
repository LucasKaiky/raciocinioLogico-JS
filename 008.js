var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let nome = lines.shift()
let salario = parseFloat(lines.shift())
let totalV = parseFloat(lines.shift())

let salarioC = salario + (0.15 * totalV)

console.log(`TOTAL = R$ ${salarioC.toFixed(2)}`)
