/*



var input = require('fs').readFileSync('stdin', 'utf8');


var lines = input.split('\n');
var itens1 = lines.shift().split(" ");
var itens2 = lines.shift().split(" ");

var iditem1 = itens1.shift();
var quant = parseInt(itens1.shift());
var valor = parseFloat(itens1.shift());

var iditem2 = itens2.shift();
var quant2 = parseInt(itens2.shift());
var valor2 = parseFloat(itens2.shift());



console.log('VALOR A PAGAR: R$ ' + ((quant * valor) + (quant2 * valor2)).toFixed(2));*/




var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var raio = parseFloat(lines.shift());
var esfera = (4 / 3.0) * 3.14159 * (raio * raio * raio);
console.log('VOLUME = ' + esfera.toFixed(3));