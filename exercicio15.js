/*15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.*/

const prompt = require("prompt-sync")();

console.log("------ Números Pares ------");

let numbers = [];

readNumbers(numbers);

console.log("Números pares informados: ");

let evenNumbers = numbers.filter((number) => number % 2 === 0);

evenNumbers.forEach((number) => {
  let index = numbers.indexOf(number);
  console.log(`Número: ${number} - Posição original: ${index}`);
});

function input(msg) {
  let info;
  do {
    info = prompt(msg);
    if (!Number.isInteger(parseFloat(info)) || info < 0) {
      console.log("Informe um número inteiro positivo válido.");
    }
  } while (!Number.isInteger(parseFloat(info)) || info < 0);
  return parseInt(info);
}
function readNumbers(numbers) {
  for (let i = 0; i < 10; i++) {
    numbers.push(input("Digite um número: "));
  }
}
