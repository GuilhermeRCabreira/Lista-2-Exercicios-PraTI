/* 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.*/
const prompt = require("prompt-sync")();

console.log(
  "------ Preenchimento de vetores com valores pares e ímpares ------"
);

let pares = [];
let impares = [];

for (let k = 0; k < 30; k++) {
  let valor = input(`Digite o ${k + 1}º valor: `);

  if (valor % 2 === 0) {
    pares.push(valor);
    if (pares.length === 5) {
      console.log("Vetor de pares cheio:");
      console.log(pares.join(" "));
      pares = [];
    }
  } else {
    impares.push(valor);
    if (impares.length === 5) {
      console.log("Vetor de ímpares cheio:");
      console.log(impares.join(" "));
      impares = [];
    }
  }
}

if (pares.length > 0) {
  console.log("Vetor de pares restante:");
  console.log(pares.join(" "));
}

if (impares.length > 0) {
  console.log("Vetor de ímpares restante:");
  console.log(impares.join(" "));
}

function input(msg) {
  let num;
  do {
    num = prompt(msg);
    if (isNaN(num) || num < 0) {
      console.log("Informe um número inteiro.");
    }
  } while (isNaN(num) || num < 0);
  return parseInt(num);
}
