/* 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares. */

const prompt = require("prompt-sync")();

console.log("------ Análise de números ------");

let numero;
let continuar = true;
let soma = 0;
let menorValor = Infinity;
let quantidadeValores = 0;
let quantidadePares = 0;

do {
  numero = input("Informe um número: ");
  soma += numero;
  quantidadeValores++;

  if (numero < menorValor) {
    menorValor = numero;
  }

  if (numero % 2 == 0) {
    quantidadePares++;
  }

  continuar = inputContinuar("Deseja continuar? (S/N): ");
} while (continuar);

let media = soma / quantidadeValores;

console.log(`Soma dos valores: ${soma}`);
console.log(`Menor valor digitado: ${menorValor}`);
console.log(`Média dos valores: ${media}`);
console.log(`Quantidade de valores pares: ${quantidadePares}`);

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

function inputContinuar(msg) {
  let continuar;
  do {
    continuar = prompt(msg);
    if (continuar != "S" && continuar != "N") {
      console.log("Erro, você deve informar S ou N.");
    }
  } while (continuar != "S" && continuar != "N");
  return continuar == "S";
}
