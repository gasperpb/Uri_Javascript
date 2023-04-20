"use strict";

export function problem(lines) {
  let salario = parseFloat(lines[0]);

  let reajuste;

  if (salario <= 400) {
    reajuste = 0.15;
  } else if (salario <= 800) {
    reajuste = 0.12;
  } else if (salario <= 1200) {
    reajuste = 0.1;
  } else if (salario <= 2000) {
    reajuste = 0.07;
  } else {
    reajuste = 0.04;
  }

  let novoSalario = salario * (1 + reajuste);
  let valorReajuste = novoSalario - salario;
  let indiceReajuste = reajuste * 100;

  console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
  console.log(`Reajuste ganho: ${valorReajuste.toFixed(2)}`);
  console.log(`Em percentual: ${indiceReajuste.toFixed(0)} %`);
}
