var input = require('fs').readFileSync('stdin', 'utf8');


var lines = input.split('\n');

let id = parseInt(lines.shift());

let qhoras = parseInt(lines.shift());
var valorHora = parseFloat(lines.shift());


var SALARY = (qhoras * valorHora);
console.log("NUMBER = " + id)
console.log("SALARY = U$ " + SALARY.toFixed(2))