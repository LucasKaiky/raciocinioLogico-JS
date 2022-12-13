var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let a = parseFloat(lines.shift())
let b = parseFloat(lines.shift())

let media = (a * 3.5 + b * 7.5)/11.0

console.log(`MEDIA = ${media.toFixed(5)}`)