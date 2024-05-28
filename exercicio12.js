/*12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.*/

console.log("------ Sequência de Fibonacci ------");

let termo1 = 0;
let termo2 = 1;
let termo3;

console.log("Os 10 primeiros termos da Sequência de Fibonacci são:");
for (let i = 0; i < 10; i++) {
  console.log(termo1);
  termo3 = termo1 + termo2;
  termo1 = termo2;
  termo2 = termo3;
}
