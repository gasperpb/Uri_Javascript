var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split(' ')
parsFloat(lines.shift())

console.log(lines[0]);
console.log(lines[1]);
console.log(lines[2]);

lines.sort((a, b) => a - b)
console.log()
console.log(lines[0]);
console.log(lines[1]);
console.log(lines[2]);