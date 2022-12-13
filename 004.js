var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let prod1 = parseInt(lines.shift())
let prod2 = parseInt(lines.shift())

let PROD = prod1 * prod2

console.log(`PROD = ${PROD}`)