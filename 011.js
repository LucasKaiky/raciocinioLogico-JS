//Beecrowd 1012

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valores = lines.shift().split(" ")
let a = parseFloat(valores.shift())
let b = parseFloat(valores.shift())
let c = parseFloat(valores.shift())
const pi = 3.14159


//a) a área do triângulo retângulo que tem A por base e C por altura.
let t = (a * c)/2

//b) a área do círculo de raio C. (pi = 3.14159)
let circ = pi * (c**2)

//c) a área do trapézio que tem A e B por bases e C por altura.
let tra = ((a + b) * c)/2

//d) a área do quadrado que tem lado B.
let qua = b * b

//e) a área do retângulo que tem lados A e B.
let ret = a * b

console.log(`TRIANGULO: ${t.toFixed(3)}\nCIRCULO: ${circ.toFixed(3)}\nTRAPEZIO: ${tra.toFixed(3)}\nQUADRADO: ${qua.toFixed(3)}\nRETANGULO: ${ret.toFixed(3)}`)