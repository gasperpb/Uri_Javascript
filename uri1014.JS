/*URI Online Judge | 1014
Consumo
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).

Entrada
O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total percorrida (em Km), e um valor real Y representando o total de combustível gasto, com um dígito após o ponto decimal.

Saída
Apresente o valor que representa o consumo médio do automóvel com 3 casas após a vírgula, seguido da mensagem "km/l".

Exemplo de Entrada	Exemplo de Saída
500
35.0

14.286 km/l*/




var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var X = parseInt(lines.shift()); //um valor inteiro X representando a distância total percorrida (em Km)
var y = parseInt(lines.shift()); //e um valor real Y representando o total de combustível gasto, com um dígito após o ponto decimal.
var saida = (X / y).toFixed(3);

console.log(saida + " km/l");