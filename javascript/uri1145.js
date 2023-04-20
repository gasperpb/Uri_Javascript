var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split(' ');

let colunas = parseInt(valores.shift())
let numMax = parseInt(valores.shift())

let contador = 0
let str = ""
for (i = 1; i < numMax; i++) {
    contador += 1
    if (contador == colunas) {
        contador = 0
        str += `${i}\n`
    } else {
        str += `${i} `
    }

}
str += `${numMax}`
console.log(str)