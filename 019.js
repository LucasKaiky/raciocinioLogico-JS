//Beecrow 1020

var input = require('fs').readFileSync('stdin', 'utf8');

let idade = parseInt(input)

const idades = [365, 30, 1]
const r = []

for(let i of idades){
    r.push(parseInt(idade / i))
    idade = idade % i
}

console.log(`${r[0]} ano(s)\n${r[1]} mes(es)\n${r[2]} dia(s)`)