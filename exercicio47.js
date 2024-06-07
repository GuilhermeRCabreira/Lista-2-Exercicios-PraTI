/*47. Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.*/

console.log("------ Transformando objeto com função ------");

let dados = {
  idade: 30,
  altura: 1.75,
  peso: 70,
  salario: 3500.5,
};

console.log("Objeto original: ", dados);

console.log("Objeto transformado: ", transformarObj(dados, dobrar));

function transformarObj(obj, funcao) {
  let novoObj = {};

  for (let prop in obj) {
    novoObj[prop] = funcao(obj[prop]);
  }

  return novoObj;
}

function dobrar(valor) {
  return valor * 2;
}
