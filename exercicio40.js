/*40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.)*/

const prompt = require("prompt-sync")();

console.log("------ Resultado oficial da Loto ------");

let resultadoOficial = [];
let apostas = [];
let apostadores = [];

for (let i = 0; i < 5; i++) {
  resultadoOficial.push(
    input(`Digite o valor da posição ${i + 1} do resultado oficial: `)
  );
}

let continuar = "s";

for (let i = 0; i < 50 && continuar.toLowerCase() === "s"; i++) {
  let apostador = {
    numeroCartao: input(`Digite o número do cartão do apostador ${i + 1}: `),
    respostas: [],
  };

  for (let j = 0; j < 5; j++) {
    apostador.respostas.push(
      input(`Digite o valor da posição ${j + 1} do cartão do apostador: `)
    );
  }

  apostadores.push(apostador);
  continuar = prompt("Deseja adicionar outro apostador? (s/n) ");
}

apostadores.forEach((apostador) => {
  let acertos = 0;

  for (let i = 0; i < 5; i++) {
    if (apostador.respostas[i] === resultadoOficial[i]) {
      acertos++;
    }
  }

  console.log(
    `O apostador ${apostador.numeroCartao} acertou ${acertos} número(s).`
  );

  if (acertos === 5) {
    console.log("Ganhador.");
  }
});

function input(msg) {
  let num;
  do {
    num = prompt(msg);
    if (!Number.isInteger(parseFloat(num)) || num < 0) {
      console.log("Informe um número inteiro.");
    }
  } while (!Number.isInteger(parseFloat(num)) || num < 0);
  return num;
}
