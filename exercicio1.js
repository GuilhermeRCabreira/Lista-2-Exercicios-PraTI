/* 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.
 */

const prompt = require("prompt-sync")();

console.log("------ Redução do tempo de vida de um fumante ------");

let cigarrosDia = input("Quantos cigarros você fuma por dia?");
let anosFumando = input("Há quantos anos você fuma?");

lifetime(cigarrosDia, anosFumando);

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

function lifetime(numCigarros, numAnos) {
  let numCigarrosTotal = numCigarros * numAnos * 365;
  let tempoPerdido = numCigarrosTotal * 10;
  let diasPerdidos = tempoPerdido / 1440;

  console.log("Quantidades de dias perdidos: " + diasPerdidos + " dias.");
}
