var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split(' ')

let a = parseInt(lines[0])
let b = parseInt(lines[1])

if (a % b === 0 || b % a === 0) {
    console.log("Sao Multiplos")
}
else {
    console.log("Nao sao Multiplos")
}
