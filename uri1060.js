numero = Array(6);

numero[0] = gets();
numero[1] = gets();
numero[2] = gets();
numero[3] = gets();
numero[4] = gets();
numero[5] = gets();

positivos = numero.filter(value => value > 0);

console.log(positivos.length + " valores positivos");

numero = Array(5);
numero[0] = gets();
numero[1] = gets();
numero[2] = gets();
numero[3] = gets();
numero[4] = gets();
positivos = numero.filter(value => value > 0);
negativos = numero.filter(value => value < 0);
pares = numero.filter(value % 2== 0);
impar = numero.filter(value % 2 != 0);
console.log(pares.length + " valor(es) par(es)");
console.log(impar.length + " valor(es) impar(es)");
console.log(positivos.length + " valor(es) positivo(s)");
console.log(negativos.length + " valor(es) negativo(s)");