"use strict";

export function problem(lines) {
  const ddd = parseInt(lines[0]);

  // Tabela de códigos DDD e cidades correspondentes
  const dddCidades = {
    61: "Brasilia",
    71: "Salvador",
    11: "Sao Paulo",
    21: "Rio de Janeiro",
    32: "Juiz de Fora",
    19: "Campinas",
    27: "Vitoria",
    31: "Belo Horizonte",
    11: "Sao Paulo",
  };

  // Verifica se o código de DDD existe na tabela
  if (ddd in dddCidades) {
    console.log(dddCidades[ddd]);
  } else {
    console.log("DDD nao cadastrado");
  }
}
