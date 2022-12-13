//Beecrowd 1021

var input = require('fs').readFileSync('stdin', 'utf8');
let valor = parseFloat(input)

let notas = [100, 50, 20, 10, 5, 2]
let moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01]
let a = 0

console.log(`NOTAS:`)
for (let v of notas){
    a = parseInt(valor / v)
    console.log(`${a} nota(s) de R$ ${v.toFixed(2)}`)  
    valor = valor % v  
}

console.log(`MOEDAS:`)
for (let j of moedas){
    a = parseInt(valor/j)
    console.log(`${a} moeda(s) de R$ ${j.toFixed(2)}`)
    valor = valor % j + 0.00001
}