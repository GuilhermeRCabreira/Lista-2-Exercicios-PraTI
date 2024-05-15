/* 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura). */

const prompt = require("prompt-sync")();

console.log("------ Jogo de JoKenPo ------");

console.log("Escolha entre:\n 1-Pedra\n2-Papel\n3-Tesoura.");

let jogador1 = input("Jogador 1: ");
let jogador2 = input("Jogador 2: ");

jokenpo(jogador1, jogador2);

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

function jokenpo(jogador1, jogador2) {
  if (jogador1 == jogador2) {
    console.log("Empate!");
  } else if (jogador1 == 1 && jogador2 == 3) {
    console.log("Jogador 1 venceu!");
  } else if (jogador1 == 2 && jogador2 == 1) {
    console.log("Jogador 1 venceu!");
  } else if (jogador1 == 3 && jogador2 == 2) {
    console.log("Jogador 1 venceu!");
  } else {
    console.log("Jogador 2 venceu!");
  }
}
