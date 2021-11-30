var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('/n')

resultado = 1;

let n = parseInt(lines.shift())
for (let i = n; i > 0; i--) {

    resultado *= i;

}
console.log(resultado)
