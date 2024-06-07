/*39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.*/

const prompt = require("prompt-sync")();

console.log("---- Compactação de Vetor ----");

let vetorA = [];
let vetorB = [];

for (let i = 0; i < 100; i++) {
  vetorA.push(parseFloat(input(`Digite o ${i + 1}º número: `)));
}

vetorB = vetorA.filter((el) => el > 0);

console.log(`O vetor compactado é: ${vetorB}`);

function input(msg) {
  let numero;
  do {
    numero = prompt(msg);
    if (isNaN(numero)) {
      console.log("Digite um número válido.");
    }
  } while (isNaN(numero));
  return numero;
}
