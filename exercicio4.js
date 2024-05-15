/*4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.*/

const prompt = require("prompt-sync")();

console.log("------------Identificador de triângulo:------------");

let A;
let B;
let C;

console.log("Forneça o valor das retas:");
A = entrada("Reta A: ");
B = entrada("Reta B: ");
C = entrada("Reta C: ");

if (verificacaoDeTriangulo(A, B, C) == true) {
  console.log("Os valores informados correspondem a um triângulo.");
} else {
  console.log("Os valores informados não correspondem a um triângulo.");
}

///Funções/////
function entrada(mensagem) {
  let numero;
  do {
    numero = prompt(mensagem);
    if (parseFloat(numero) <= 0 || isNaN(parseFloat(numero))) {
      console.log("Erro, você deve informar um número maior que zero.");
    }
  } while (parseFloat(numero) <= 0 || isNaN(parseFloat(numero)));
  return parseFloat(numero);
}

function verificacaoDeTriangulo(A, B, C) {
  if (A < B + C && B < A + C && C < A + B) {
    return true;
  } else {
    return false;
  }
}
