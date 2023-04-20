
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var horas = parseFloat(lines.shift())
var vmedia = parseFloat(lines.shift())


var litros = horas * vmedia / 12;
console.log(litros.toFixed(3));