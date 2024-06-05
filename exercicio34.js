/*34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações.*/

const prompt = require("prompt-sync")();

console.log(
  "------ Multiplicação de cada linha pelo elemento da diagonal principal ------"
);

let matriz = [];
let diagonalPrincipal = [];

for (let i = 0; i < 50; i++) {
  let linha = [];
  for (let j = 0; j < 50; j++) {
    linha.push(input(`Digite o valor da posição [${i}][${j}]: `));
  }
  matriz.push(linha);
}

criarDiagonalPrincipal(diagonalPrincipal, matriz);

console.log("Matriz original:");

matriz.forEach((row) => {
  console.log(row.join(" "));
});

console.log("Diagonal principal:");

console.log(diagonalPrincipal.join(" "));

console.log("Matriz modificada:");

for (let i = 0; i < 50; i++) {
  for (let j = 0; j < 50; j++) {
    matriz[i][j] *= diagonalPrincipal[i];
  }
}

matriz.forEach((row) => {
  console.log(row.join(" "));
});

function input(msg) {
  let num;
  do {
    num = prompt(msg);
    if (isNaN(num)) {
      console.log("Informe um número.");
    }
  } while (isNaN(num));
  return parseFloat(num);
}

function criarDiagonalPrincipal(diagonalPrincipal, matriz) {
  for (let i = 0; i < 50; i++) {
    diagonalPrincipal.push(matriz[i][i]);
  }
}
