"use strict";

export function problem(input) {
  const [a, b, c] = lines[0]
    .split(" ")
    .map(Number)
    .sort((x, y) => y - x);

  if (a >= b + c) {
    console.log("NAO FORMA TRIANGULO");
  } else {
    if (a ** 2 === b ** 2 + c ** 2) {
      console.log("TRIANGULO RETANGULO");
    }
    if (a ** 2 > b ** 2 + c ** 2) {
      console.log("TRIANGULO OBTUSANGULO");
    }
    if (a ** 2 < b ** 2 + c ** 2) {
      console.log("TRIANGULO ACUTANGULO");
    }
    if (a === b && b === c) {
      console.log("TRIANGULO EQUILATERO");
    }
    if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) {
      console.log("TRIANGULO ISOSCELES");
    }
  }
}
