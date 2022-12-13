//Beecrowd 1011

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

//Fórmula = (4/3) * pi * r^3

const pi = Number(3.14159)
let raio = lines.shift()

let formula = (4/3.0) * pi * (raio**3)

console.log(`VOLUME = ${formula.toFixed(3)}`)