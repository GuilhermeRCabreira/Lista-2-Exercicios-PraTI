/*32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.*/

const prompt = require("prompt-sync")();

console.log(
  "------ Divisão dos elementos de cada linha pelo maior elemento em módulo ------"
);

let M = [];

for (let i = 0; i < 2; i++) {
  let linhas = [];
  for (let j = 0; j < 3; j++) {
    linhas.push(input(`Digite o valor da posição [${i}][${j}]: `));
  }
  M.push(linhas);
}

let MModificado = [];

for (let i = 0; i < 12; i++) {
  let maiorElemento = encontrarMaiorElemento(M[i]);
  let linhas = [];
  for (let j = 0; j < 13; j++) {
    linhas.push(M[i][j] / maiorElemento);
  }
  MModificado.push(linhas);
}

console.log("Matriz original:");

M.forEach((row) => {
  console.log(row.join(" "));
});

console.log("Matriz modificada:");

MModificado.forEach((row) => {
  console.log(row.join(" "));
});

function input(msg) {
  let num;
  do {
    num = prompt(msg);
    if (!Number.isInteger(parseFloat(num)) || num < 0) {
      console.log("Informe um número inteiro.");
    }
  } while (!Number.isInteger(parseFloat(num)) || num < 0);
  return parseInt(num);
}

function encontrarMaiorElemento(linha) {
  let maiorElemento = linha[0];

  for (let j = 0; j < linha.length; j++) {
    if (Math.abs(linha[j]) > Math.abs(maiorElemento)) {
      maiorElemento = linha[j];
    }
  }

  return Math.abs(maiorElemento);
}
