var input = require('fs').readFileSync('stdin', 'utf8');


var lines = input.split('\n');

var VEDOR = lines.shift();

var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var DIFERENCA = (A * B - C * D);
var D = parseFloat(lines.shift());
console.log('DIFERENCA = ' + DIFERENCA);