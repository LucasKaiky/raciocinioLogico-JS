//Beecrowd 1019

var input = require('fs').readFileSync('stdin', 'utf8');

let segundos = parseInt(input)

const valores = [3600, 60, 1]
const r = []

for (let valor of valores){
    r.push(parseInt(segundos / valor))
    segundos = segundos % valor
}

console.log(r.join(":"))

