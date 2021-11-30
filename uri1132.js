
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('/n')

var x = parseInt(lines.shift())
var y = parseInt(lines.shift())


var menor = x;
var maior = y;

//Verifica as condições entre maior e menor.
if (x > y) {
    menor = y;
    maior = x;
}

var total = 0;

//Calcula os valores um a um 
for (var i = menor; i <= maior; i++) {

    //Verifica os valores que não são divisíveis por 13
    if (i % 13 != 0) {
        total = total + i;

    }
}
console.log(total)