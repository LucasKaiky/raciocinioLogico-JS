//Beecrowd 1017

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines.shift()) //horas
let y = parseInt(lines.shift()) //km/h

let total = x * y
let comb = total/12

console.log(comb.toFixed(3))
