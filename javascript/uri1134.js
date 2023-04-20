
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = parseFloat(input)


var n = [10]
var a = 0
var v = lines
for (a = 0; a <= 9; a++) {
    n[a] = v;
    console.log("N[" + a + "] = ", v)
    v *= 2;
}

[Running] node "c:\Users\Achilles_pc\Documents\Projetos\JavaScript\Uri_Javascript\uri1134.js"
N[0] = 1
N[1] = 2
N[2] = 4
N[3] = 8
N[4] = 16
N[5] = 32
N[6] = 64
N[7] = 128
N[8] = 256
N[9] = 512