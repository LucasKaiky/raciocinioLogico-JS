var input = require('fs').readFileSync('stdin', 'utf8');


var raio = parseFloat(input);
var n = 3.14159;


var A = n * (raio**2);

console.log(`A=${A.toFixed(4)}`);

