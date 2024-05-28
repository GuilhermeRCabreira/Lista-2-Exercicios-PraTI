/*17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.*/

const prompt = require("prompt-sync")();

console.log("------ Identificador de menores ------");

let names = [];
let ages = [];

readData(names, ages);

console.log("Menores de idade: ");

let underAge = ages.filter((age) => age < 18);

underAge.forEach((age) => {
  let index = ages.indexOf(age);
  console.log(`Nome: ${names[index]} - Idade: ${age}`);
});

function input(msg) {
  let info;
  do {
    info = prompt(msg);
    if (!isNaN(info)) {
      console.log("Informe um nome válido.");
    }
  } while (!isNaN(info));
  return info;
}

function inputAge(msg) {
  let info;
  do {
    info = prompt(msg);
    if (!Number.isInteger(parseFloat(info)) || info < 0) {
      console.log("Informe uma idade válida.");
    }
  } while (!Number.isInteger(parseFloat(info)) || info < 0);
  return parseInt(info);
}

function readData(names, ages) {
  for (let i = 0; i < 9; i++) {
    names.push(input("Digite o nome: "));
    ages.push(inputAge("Digite a idade: "));
  }
}
