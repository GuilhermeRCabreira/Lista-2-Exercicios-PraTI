/* 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente. */

const prompt = require("prompt-sync")();

console.log("------ Matriz de números reais ------");

let matriz = [];

for (let i = 0; i < 15; i++) {
  let linhas = [];
  for (let j = 0; j < 20; j++) {
    linhas.push(input(`Digite o valor da posição [${i}][${j}]: `));
  }
  matriz.push(linhas);
}

console.log("Matriz original:");

matriz.forEach((row) => {
  console.log(row.join(" "));
});

let somas = somarColunas(matriz);

for (let j = 0; j < somas.length; j++) {
  console.log(`Soma da coluna ${j}: ${somas[j].toFixed(2)}`);
}

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

function somarColunas(matriz) {
  if (matriz.length === 0 || matriz[0].length === 0) {
    return [];
  }

  let numeroDeColunas = matriz[0].length;
  let somasColunas = new Array(numeroDeColunas).fill(0);

  for (let j = 0; j < numeroDeColunas; j++) {
    for (let i = 0; i < matriz.length; i++) {
      somasColunas[j] += matriz[i][j];
    }
  }

  return somasColunas;
}
