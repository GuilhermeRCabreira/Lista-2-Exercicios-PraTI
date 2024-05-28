/*11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência. */

const prompt = require("prompt-sync")();

console.log("------ Progressão Aritmética ------");

let primeiroTermo = input("Informe o primeiro termo: ");
let razao = input("Informe a razão: ");

let soma = 0;
let termo = primeiroTermo;

console.log("Os 10 primeiros termos da PA são:");
for (let i = 0; i < 10; i++) {
  console.log(termo);
  soma += termo;
  termo += razao;
}

console.log(`Soma dos valores: ${soma}`);

function input(msg) {
  let num;
  do {
    num = prompt(msg);
    if (isNaN(parseFloat(num))) {
      console.log("Erro, você deve informar um número válido.");
    }
  } while (isNaN(parseFloat(num)));
  return parseFloat(num);
}
