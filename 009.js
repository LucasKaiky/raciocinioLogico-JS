// Beecrowd 1010

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let inf1 = lines.shift().split(" ")
let inf2 = lines.shift().split(" ")


let p1Cod = inf1.shift()
let p1Q = inf1.shift()
let p1V = inf1.shift()
let total1 = p1Q * p1V



let p2Cod = inf2.shift()
let p2Q = inf2.shift()
let p2V = inf2.shift()
let total2 = p2Q * p2V

let calc = total1 + total2


console.log(`VALOR A PAGAR: R$ ${calc.toFixed(2)}`)