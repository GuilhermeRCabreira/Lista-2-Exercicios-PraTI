/*14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.*/

const prompt = require("prompt-sync")();

console.log("------ Lista de Nomes ------");

let names = [];

readNames(names);

console.log("Nomes informados: ");

console.log(names.reverse().join(", "));

function input(msg) {
  let info;
  do {
    info = prompt(msg);
    if (!isNaN(info)) {
      console.log("Informe uma string válida.");
    }
  } while (!isNaN(info));
  return info;
}

function readNames(names) {
  for (let i = 0; i < 7; i++) {
    names.push(input("Digite um nome: "));
  }
}
