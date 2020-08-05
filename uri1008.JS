var input = require('fs').readFileSync('stdin', 'utf8');


var lines = input.split('\n');

var NUMBER = parseInt(lines.shift());

var B = parseInt(lines.shift());
var C = parseFloat(lines.shift());


var SALARY = (B * C);

console.log('NUMBER = ' + NUMBER + '\n' + 'SALARY = U$' + SALARY.toFixed(2));
//console.log('SALARY = U$' + SALARY.toFixed(2));