/* 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km */

const prompt = require("prompt-sync")();

console.log("------ Aluguel de carros ------");

console.log("Informe o tipo de carro alugado: ");
console.log("1 - Popular");
console.log("2 - Luxo");

let tipoCarro = input("Tipo de carro: ");
let diasAlugados = input("Quantos dias de aluguel? ");
let kmPercorridos = inputKM("Quantos Km foram percorridos? ");

let precoAluguel = calculaPreco(tipoCarro, diasAlugados, kmPercorridos);

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

function inputKM(msg) {
  let num;
  do {
    num = prompt(msg);
    if (parseFloat(num) <= 0 || isNaN(parseFloat(num))) {
      console.log("Erro, você deve informar um número maior que zero.");
    }
  } while (parseFloat(num) <= 0 || isNaN(parseFloat(num)));
  return parseFloat(num);
}

function calculaPreco(tipoCarro, diasAlugados, kmPercorridos) {
  let precoAluguel;
  let precoKm;

  if (tipoCarro == 1) {
    if (kmPercorridos <= 100) {
      precoKm = kmPercorridos * 0.2;
    } else {
      precoKm = kmPercorridos * 0.1;
    }
    precoAluguel = diasAlugados * 90 + precoKm;
  } else {
    if (kmPercorridos <= 200) {
      precoKm = kmPercorridos * 0.3;
    } else {
      precoKm = kmPercorridos * 0.25;
    }
    precoAluguel = diasAlugados * 150 + precoKm;
  }

  console.log(`O preço a ser pago é R$ ${precoAluguel.toFixed(2)}.`);
  return precoAluguel;
}
