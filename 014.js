//Beecrowd 1015

var input = require('fs').readFileSync('stdin', 'utf8');
let valores = input.split("\n")
let [x1, y1] = valores[0].split(" ")
let [x2, y2] = valores[1].split(" ")

let distancia = Math.sqrt(((x2 - x1)**2) + ((y2-y1)**2))

console.log(distancia.toFixed(4))