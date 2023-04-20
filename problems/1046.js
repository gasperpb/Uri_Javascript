"use strict";

export function problem(lines) {
  const hours = lines.split(" ").map((item) => parseInt(item));
  const hoursGame = hours[1] - hours[0];
  const time = hoursGame * hours[2];
  return `O JOGO DUROU ${hoursGame} HORA(S) E O SALARIO E = R$ ${time.toFixed(
    2
  )}`;
}
