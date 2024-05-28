/* 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */

const prompt = require("prompt-sync")();

console.log("------ Jogo de adivinhação ------");

let numeroSorteado = Math.floor(Math.random() * 5 + 1);
let tentativa = input("Tente adivinhar o número sorteado (1 a 5): ");

verificacao(numeroSorteado, tentativa);

console.log(`Número sorteado: ${numeroSorteado}`);

function input(msg) {
  let num;
  do {
    num = prompt(msg);
    if (!Number.isInteger(parseFloat(num))) {
      console.log("Informe um número inteiro válido.");
    }
  } while (!Number.isInteger(parseFloat(num)));
  return parseInt(num);
}

function verificacao(numeroSorteado, tentativa) {
  if (numeroSorteado == tentativa) {
    console.log("Parabéns, você acertou!");
  } else {
    console.log("Que pena, você errou!");
  }
}
