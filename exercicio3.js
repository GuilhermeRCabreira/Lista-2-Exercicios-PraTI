/* 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas. */

const prompt = require("prompt-sync")();

console.log("------ Calculadora de preço da passagem ------");

let distancia = input("Informe a distância que deseja percorrer em Km: ");

calculaPreco(distancia);

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

function calculaPreco(distancia) {
  let preco;

  if (distancia > 200) {
    preco = distancia * 0.45;
    console.log(`O preço da passagem é R$ ${preco.toFixed(2)}.`);
  } else {
    preco = distancia * 0.5;
    console.log(`O preço da passagem é R$ ${preco.toFixed(2)}.`);
  }
}
