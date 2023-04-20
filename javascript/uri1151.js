var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('/n')
let x = parseInt(lines.shift())

let a = 0, b = 1, c = 0;
for (let y = 1; y < x; y++) {
    if (y % 2 === 1) {
        console.log(c)
        c = a + b;
        a = c;
    }
    else if (y === 2) {
        console.log(c)
    }
    else if (y % 2 === 0) {
        console.log(c)
        c = a + b;
        b = c;
    }
}
console.log(c)
