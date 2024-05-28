/*23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.*/

console.log("------ Matriz Identidade ------");

let matrizIdentidade = [];

for (let i = 0; i < 7; i++) {
  matrizIdentidade[i] = [];
  for (let j = 0; j < 7; j++) {
    if (i === j) {
      matrizIdentidade[i][j] = 1;
    } else {
      matrizIdentidade[i][j] = 0;
    }
  }
}

matrizIdentidade.forEach((row) => {
  console.log(row.join(" "));
});
