/*29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.*/

const prompt = require("prompt-sync")();

console.log("------ Soma de linhas, colunas e diagonal principal ------");

let matriz = [];

for (let i = 0; i < 5; i++) {
  let linhas = [];
  for (let j = 0; j < 5; j++) {
    linhas.push(input(`Digite o valor da posição [${i}][${j}]: `));
  }
  matriz.push(linhas);
}

console.log("Matriz original:");

matriz.forEach((row) => {
  console.log(row.join(" "));
});

let somaLinha4 = somarLinha(matriz, 3);

let somaColuna2 = somarColuna2(matriz);

let somaDP = somaDiagonalPrincipal(matriz);

let somaT = somaTotal(matriz);

console.log(`Soma da linha 4: ${somaLinha4}`);
console.log(`Soma da coluna 2: ${somaColuna2}`);
console.log(`Soma da diagonal principal: ${somaDP}`);
console.log(`Soma total da matriz: ${somaT}`);

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

function somarLinha(matriz, linha) {
  let somaLinha4 = 0;
  for (let j = 0; j < matriz[linha].length; j++) {
    somaLinha4 += matriz[linha][j];
  }
  return somaLinha4;
}

function somarColuna2(matriz) {
  let somaColuna2 = 0;
  for (let i = 0; i < matriz.length; i++) {
    somaColuna2 += matriz[i][1];
  }
  return somaColuna2;
}

function somaDiagonalPrincipal(matriz) {
  let somaDiagonalPrincipal = 0;
  for (let i = 0; i < matriz.length; i++) {
    somaDiagonalPrincipal += matriz[i][i];
  }
  return somaDiagonalPrincipal;
}

function somaTotal(matriz) {
  let somaTotal = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      somaTotal += matriz[i][j];
    }
  }
  return somaTotal;
}
