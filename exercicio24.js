/*24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.*/

console.log("------ Quantidade de elementos negativos por linha ------");

let matriz = [
  [1, -2, 3, -4, 5, -6, 7, -8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [-1, -2, -3, -4, -5, -6, -7, -8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [-1, -2, -3, -4, -5, -6, -7, -8],
  [1, 2, 3, 4, 5, 6, 7, 8],
];
let C = [];

for (let i = 0; i < matriz.length; i++) {
  let count = 0;
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] < 0) {
      count++;
    }
  }
  C[i] = count;
}

console.log("Matriz original:");
matriz.forEach((row) => {
  console.log(row.join(" "));
});

console.log("Vetor de elementos negativos:");
console.log(C);
