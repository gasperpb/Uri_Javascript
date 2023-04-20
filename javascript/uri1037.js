
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = parseFloat(input)




if (lines >= 0 && lines <= 25) {
    console.log("Intervalo [0,25]")
}
else if (lines > 25 && lines <= 50) {
    console.log("Intervalo (25,50]")
}
else if (lines > 50 && lines <= 75) {
    console.log("Intervalo (50,75]")
}
else if (lines > 75 && lines <= 100) {
    console.log("Intervalo (75,100]")
}
else {
    console.log("Fora de intervalo")
}