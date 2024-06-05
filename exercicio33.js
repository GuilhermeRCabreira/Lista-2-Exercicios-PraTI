/* 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.*/

const prompt = require("prompt-sync")();

console.log("------ Divisão envolvendo diagonais ------");

let matriz = [];
let diagonalPrincipal = [];
let diagonalSecundaria = [];
let mediaDiagonalSecundaria = 0;

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(input(`Digite o valor da posição [${i}][${j}]: `));
  }
  matriz.push(linha);
}

criarDiagonal(diagonalPrincipal, diagonalSecundaria, matriz);

calcularMedia(diagonalSecundaria);

console.log("Matriz original:");

matriz.forEach((row) => {
  console.log(row.join(" "));
});

console.log("Diagonal principal:");

console.log(diagonalPrincipal.join(" "));

console.log("Diagonal secundária:");

console.log(diagonalSecundaria.join(" "));

console.log("Média da diagonal secundária:");

console.log(mediaDiagonalSecundaria);

console.log("Matriz modificada:");

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === j) {
      matriz[i][j] *= mediaDiagonalSecundaria;
    }
  }
}

matriz.forEach((row) => {
  console.log(row.join(" "));
});

function input(msg) {
  let num;
  do {
    num = prompt(msg);
    if (!Number.isInteger(parseFloat(num))) {
      console.log("Informe um número.");
    }
  } while (!Number.isInteger(parseFloat(num)));
  return parseInt(num);
}

function criarDiagonal(diagonalPrincipal, diagonalSecundaria, matriz) {
  for (let i = 0; i < 3; i++) {
    diagonalPrincipal.push(matriz[i][i]);
    diagonalSecundaria.push(matriz[i][2 - i]);
  }
}

function calcularMedia(diagonalSecundaria) {
  let soma = 0;
  for (let i = 0; i < diagonalSecundaria.length; i++) {
    soma += diagonalSecundaria[i];
  }
  mediaDiagonalSecundaria = soma / 3;
}
