/*48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.*/

console.log("------ Combinando inventários ------");

let inventarioLojaA = {
  cadeiras: 10,
  mesas: 5,
  sofas: 15,
  tv: 20,
};

let inventarioLojaB = {
  cadeiras: 5,
  mesas: 15,
  sofas: 10,
  tv: 25,
};

console.log("Inventário da loja A: ", inventarioLojaA);

console.log("Inventário da loja B: ", inventarioLojaB);

console.log(
  "Inventário combinado: ",
  combinarInventarios(inventarioLojaA, inventarioLojaB)
);

function combinarInventarios(lojaA, lojaB) {
  let inventarioCombinado = {};

  for (let item in lojaA) {
    if (lojaB[item]) {
      inventarioCombinado[item] = lojaA[item] + lojaB[item];
    } else {
      inventarioCombinado[item] = lojaA[item];
    }
  }

  for (let item in lojaB) {
    if (!lojaA[item]) {
      inventarioCombinado[item] = lojaB[item];
    }
  }

  return inventarioCombinado;
}
