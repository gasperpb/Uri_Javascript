var input = require('fs').readFileSync('stdin', 'utf8');


var lines = input.split('\n');
var input = parseFloat(lines.shift());
//Formula um, deu certo também, a formula 2 o código ficou mais enxuto 
//var n = 3.14159;
//var area = n * (input * input);
//console.log('A=', area.toFixed(4));
console.log("A=" + (3.14159 * Math.pow(input, 2)).toFixed(4));