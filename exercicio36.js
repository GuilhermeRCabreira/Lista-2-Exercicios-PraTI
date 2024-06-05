/*36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".*/

const prompt = require("prompt-sync")();

console.log("------ Gabarito da loteria esportiva ------");

let gabarito = [];
let apostadores = [];

for (let i = 0; i < 13; i++) {
  gabarito.push(input(`Digite o valor da posição ${i + 1} do gabarito: `));
}

let continuar = "s";

for (let i = 0; i < 100 && continuar.toLowerCase() === "s"; i++) {
  let apostador = {
    numeroCartao: input(`Digite o número do cartão do apostador ${i + 1}: `),
    respostas: [],
  };

  for (let j = 0; j < 13; j++) {
    apostador.respostas.push(
      input(`Digite o valor da posição ${j + 1} do cartão do apostador: `)
    );
  }

  apostadores.push(apostador);
  continuar = prompt("Deseja adicionar outro apostador? (s/n) ");
}

apostadores.forEach((apostador) => {
  let acertos = 0;

  for (let i = 0; i < 13; i++) {
    if (apostador.respostas[i] === gabarito[i]) {
      acertos++;
    }
  }

  console.log(
    `O apostador ${apostador.numeroCartao} acertou ${acertos} número(s).`
  );

  if (acertos === 13) {
    console.log("Parabéns, tu foi o GANHADOR.");
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
  return parseInt(num);
}
