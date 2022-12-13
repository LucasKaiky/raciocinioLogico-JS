//Beecrowd 1018

var input = require('fs').readFileSync('stdin', 'utf8');


const cedulas = [100, 50, 20, 10, 5, 2, 1]
let valor = parseInt(input)
console.log(valor)

for(let cedula of cedulas){
    let qtd = parseInt(valor / cedula)
    console.log(`${qtd} nota(s) de R$ ${cedula},00`)
    valor = valor % cedula
}
