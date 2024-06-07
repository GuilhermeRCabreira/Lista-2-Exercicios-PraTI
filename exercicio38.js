/*38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.*/

const prompt = require("prompt-sync")();

console.log("---- Operações com Vetor ----");

let vetor = [];
let opcao = 0;

for (let i = 0; i < 6; i++) {
  vetor.push(parseFloat(input(`Digite o ${i + 1}º número: `)));
}

opcao = parseInt(
  prompt(
    "Escolha uma opção:\n1- soma dos elementos;\n2- produto dos elementos;\n3- média dos elementos;\n4- ordene os elementos em ordem crescente;\n5- mostre o vetor."
  )
);
console.log(opcao);
switch (opcao) {
  case 1:
    let soma = vetor.reduce((acc, el) => acc + el);
    console.log(`A soma dos elementos é ${soma}`);
    break;
  case 2:
    let produto = vetor.reduce((acc, el) => acc * el);
    console.log(`O produto dos elementos é ${produto}`);
    break;
  case 3:
    let media = vetor.reduce((acc, el) => acc + el) / vetor.length;
    console.log(`A média dos elementos é ${media}`);
    break;
  case 4:
    vetor.sort((a, b) => a - b);
    console.log(`Os elementos em ordem crescente são: ${vetor}`);
    break;
  case 5:
    console.log(`O vetor é: ${vetor}`);
    break;
  default:
    console.log("Opção inválida.");
}

function input(msg) {
  let numero;
  do {
    numero = prompt(msg);
    if (isNaN(numero)) {
      console.log("Digite um número válido.");
    }
  } while (isNaN(numero));
  return numero;
}
