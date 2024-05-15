/* 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, 
exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. */

const prompt = require("prompt-sync")();

console.log("------ Multa por excesso de velocidade ------");

let velocidade = input("Informe a velocidade do carro: ");

aplicacaoMulta(velocidade);

function input(msg) {
  let num;
  do {
    num = prompt(msg);
    if (parseFloat(num) <= 0 || isNaN(parseFloat(num))) {
      console.log("Erro, você deve informar um número maior que zero.");
    }
  } while (parseFloat(num) <= 0 || isNaN(parseFloat(num)));
  return parseFloat(num);
}

function aplicacaoMulta(velocidade) {
  if (velocidade > 80) {
    let excessoVelocidade = velocidade - 80;
    let multa = excessoVelocidade * 5;
    console.log(`Você foi multado em R$ ${multa.toFixed(2)}.`);
  } else {
    console.log("Você está dentro do limite de velocidade.");
  }
}
