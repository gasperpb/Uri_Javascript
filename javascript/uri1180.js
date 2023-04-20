var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

//número de números
let N = parseInt(lines.shift());
let values = lines.shift().split(' ').map(i => parseInt(i));

let menor = values[0];
let posicao = 0;

//lendo os números e atualizando menor/posicao, se necessário
for (i = 1; i < N; i++) {
    if (values[i] < menor) {
        menor = values[i];
        posicao = i;
    }
}
console.log('Menor valor: ' + menor);
console.log('Posicao: ' + posicao);