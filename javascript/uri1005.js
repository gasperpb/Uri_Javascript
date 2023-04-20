var input = require('fs').readFileSync('stdin', 'utf8');


var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var SOMA = (A * 3.5 + B * 7.5) / 11;
console.log('MEDIA = ' + SOMA.toFixed(5));