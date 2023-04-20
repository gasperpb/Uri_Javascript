
var input = require('fs').readFileSync('stdin', 'utf8');

let valor = parseInt(input)
console.log(valor)

let qnotas = parseInt(valor / 100)

console.log(qnotas + " nota(s) de R$ 100,00")

valor = valor % 100


qnotas = parseInt(valor / 50)

console.log(qnotas + " nota(s) de R$ 50,00")

valor = valor % 50

qnotas = parseInt(valor / 20)

console.log(qnotas + " nota(s) de R$ 20,00")

valor = valor % 20


qnotas = parseInt(valor / 10)

console.log(qnotas + " nota(s) de R$ 10,00")

valor = valor % 10

qnotas = parseInt(valor / 5)

console.log(qnotas + " nota(s) de R$ 5,00")

valor = valor % 5

qnotas = parseInt(valor / 2)

console.log(qnotas + " nota(s) de R$ 2,00")

valor = valor % 2

qnotas = parseInt(valor / 1)

console.log(qnotas + " nota(s) de R$ 1,00")

valor = valor % 1

