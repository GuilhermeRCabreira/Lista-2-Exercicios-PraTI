/* 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.*/

console.log("------ Sequência de Fibonacci ------");

let termo1 = 0;
let termo2 = 1;
let termo3;
let vectorFibonacci = [];

console.log("Os 15 primeiros termos da Sequência de Fibonacci são:");

createVector(termo1, termo2, termo3, vectorFibonacci);
console.log(vectorFibonacci.join(" "));

function createVector(termo1, termo2, termo3, vectorFibonacci) {
  for (let i = 0; i < 15; i++) {
    vectorFibonacci.push(termo1);
    termo3 = termo1 + termo2;
    termo1 = termo2;
    termo2 = termo3;
  }
  return vectorFibonacci;
}
