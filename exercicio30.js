/* 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.*/

const prompt = require("prompt-sync")();

console.log("------ Soma de linhas e colunas ------");

let matriz = [];

readMatriz(matriz);

console.log("Matriz original:");

matriz.forEach((row) => {
  console.log(row.join(" "));
});

let SL = somarLinhas(matriz);
let SC = somarColunas(matriz);

console.log("Vetor SL (Somas das linhas):");
console.log(SL.join(" "));

console.log("Vetor SC (Soma das colunas):");
console.log(SC.join(" "));

function input(msg) {
  let num;
  do {
    num = parseFloat(prompt(msg));
    if (isNaN(num)) {
      console.log("Valor inválido. Tente novamente.");
    }
  } while (isNaN(num));
  return num;
}

function readMatriz(matriz) {
  for (let i = 0; i < 5; i++) {
    let linhas = [];
    for (let j = 0; j < 5; j++) {
      linhas.push(input(`Digite o valor da posição [${i}][${j}]: `));
    }
    matriz.push(linhas);
  }
}

function somarLinhas(matriz) {
  if (matriz.length === 0 || matriz[0].length === 0) {
    return [];
  }

  let SL = [];

  for (let i = 0; i < matriz.length; i++) {
    let somaLinha = 0;
    for (let j = 0; j < matriz[i].length; j++) {
      somaLinha += matriz[i][j];
    }
    SL.push(somaLinha);
  }

  return SL;
}

function somarColunas(matriz) {
  if (matriz.length === 0 || matriz[0].length === 0) {
    return [];
  }

  let SC = [];

  for (let j = 0; j < matriz[0].length; j++) {
    let somaColuna = 0;
    for (let i = 0; i < matriz.length; i++) {
      somaColuna += matriz[i][j];
    }
    SC.push(somaColuna);
  }

  return SC;
}
