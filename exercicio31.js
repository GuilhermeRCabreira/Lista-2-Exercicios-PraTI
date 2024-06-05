/*31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.*/

const prompt = require("prompt-sync")();

console.log(
  "------ Contagem de valores iguais a A e criação de matriz X ------"
);

let A = input("Digite um número inteiro: ");
let V = [];

for (let i = 0; i < 30; i++) {
  let linhas = [];
  for (let j = 0; j < 30; j++) {
    linhas.push(input(`Digite o valor da posição [${i}][${j}]: `));
  }
  V.push(linhas);
}

let contador = contarValores(V, A);
let X = criarMatrizX(V, A);

console.log(`Quantidade de valores iguais a ${A} na matriz: ${contador}`);

console.log("Matriz X:");

X.forEach((row) => {
  console.log(row.join(" "));
});

function input(msg) {
  let num;
  do {
    num = prompt(msg);
    if (!Number.isInteger(parseFloat(num)) || num < 0) {
      console.log("Informe uma número inteiro.");
    }
  } while (!Number.isInteger(parseFloat(num)) || num < 0);
  return parseInt(num);
}

function contarValores(V, A) {
  let contador = 0;

  for (let i = 0; i < V.length; i++) {
    for (let j = 0; j < V[i].length; j++) {
      if (V[i][j] === A) {
        contador++;
      }
    }
  }

  return contador;
}

function criarMatrizX(V, A) {
  let X = [];

  for (let i = 0; i < V.length; i++) {
    let linhas = [];
    for (let j = 0; j < V[i].length; j++) {
      if (V[i][j] !== A) {
        linhas.push(V[i][j]);
      }
    }
    if (linhas.length > 0) {
      X.push(linhas);
    }
  }

  return X;
}
