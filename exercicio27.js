/* 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.*/

const prompt = require("prompt-sync")();

console.log("------ Multiplicação de matriz por um valor ------");

let matriz = [];
let V = [];

for (let i = 0; i < 6; i++) {
  let linhas = [];
  for (let j = 0; j < 6; j++) {
    linhas.push(input(`Digite o valor da posição [${i}][${j}]: `));
  }
  matriz.push(linhas);
}

let A = input("Digite um valor para multiplicar a matriz: ");

console.log("Matriz original:");

matriz.forEach((row) => {
  console.log(row.join(" "));
});

multiplicarMatriz(matriz, A);

console.log("Vetor V:");

console.log(V.join(" "));

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

function multiplicarMatriz(matriz, A) {
  if (matriz.length === 0 || matriz[0].length === 0) {
    return [];
  }

  let numeroDeColunas = matriz[0].length;
  let numeroDeLinhas = matriz.length;

  for (let i = 0; i < numeroDeLinhas; i++) {
    for (let j = 0; j < numeroDeColunas; j++) {
      V.push(matriz[i][j] * A);
    }
  }
}
