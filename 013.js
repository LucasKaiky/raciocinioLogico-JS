//Beecrowd 1014

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let x = parseInt(lines.shift())
let y = parseFloat(lines.shift())

let media = x / y

console.log(`${media.toFixed(3)} km/l`)