//Beecrowd 1035

var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

var line = lines.shift().split(' ');

var a = parseInt(line[0]);
var b = parseInt(line[1]);
var c = parseInt(line[2]);
var d = parseInt(line[3]);

if ((b > c) && (d > a) && (c + d) > (a + b) && (c > 0) && (d > 0) && (a % 2 === 0)) {
    console.log("Valores aceitos");
    } else {
    console.log("Valores nao aceitos");
    }

