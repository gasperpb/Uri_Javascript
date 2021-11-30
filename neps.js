const { match } = require('assert');

var input = require('fs').readFileSync('stdin', 'utf8');


var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var C = parseInt(lines.shift());
if (A>B && A>C){
    console.log(1);
}if (condition) {
    
} else if () {
    
}

console.log(Math.max(A, B, C));