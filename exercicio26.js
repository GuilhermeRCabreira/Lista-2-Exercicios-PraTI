/* 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5]. */

console.log("------ Matriz Produto ------");

let A = [];
let B = [];
let P = [];

createMatriz(A);
createMatriz(B);

for (let i = 0; i < A.length; i++) {
  P[i] = [];
  for (let j = 0; j < A[i].length; j++) {
    P[i][j] = A[i][j] * B[i][j];
  }
}

console.log("Matriz A:");
A.forEach((row) => {
  console.log(row.join(" "));
});

console.log("Matriz B:");
B.forEach((row) => {
  console.log(row.join(" "));
});

console.log("Matriz Produto:");
P.forEach((row) => {
  console.log(row.join(" "));
});

function createMatriz(matriz) {
  for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 5; j++) {
      matriz[i][j] = Math.floor(Math.random() * 100);
    }
  }
}
