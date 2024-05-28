/*28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;*/

const prompt = require("prompt-sync")();

console.log(
  "------ Soma dos elementos acima e abaixo da diagonal principal ------"
);

let matriz = [];

for (let i = 0; i < 10; i++) {
  let linhas = [];
  for (let j = 0; j < 10; j++) {
    linhas.push(input(`Digite o valor da posição [${i}][${j}]: `));
  }
  matriz.push(linhas);
}

console.log("Matriz original:");

matriz.forEach((row) => {
  console.log(row.join(" "));
});

let somaAcimaDiagonal = 0;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (j > i) {
      somaAcimaDiagonal += matriz[i][j];
    }
  }
}

let somaAbaixoDiagonal = 0;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (j < i) {
      somaAbaixoDiagonal += matriz[i][j];
    }
  }
}

console.log(
  `Soma dos elementos acima da diagonal principal: ${somaAcimaDiagonal}`
);

console.log(
  `Soma dos elementos abaixo da diagonal principal: ${somaAbaixoDiagonal}`
);

function input(msg) {
  let num;
  do {
    num = parseFloat(prompt(msg));
    if (isNaN(num)) {
      console.log("Valor inválido. Tente novamente.");
    }
  } while (isNaN(num));
  return num;
}
