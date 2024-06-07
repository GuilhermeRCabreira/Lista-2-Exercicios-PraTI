/*43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos.*/

console.log("------ Combinando propriedades de dois objetos ------");

let obj1 = {
  nome: "Guilherme",
  idade: 20,
  endereco: "Rua das Hortências",
};
let obj2 = {
  telefone: "51 99999-9999",
  email: "email.com",
  endereco: "Rua das Flores",
};

function combinarObj(obj1, obj2) {
  let objCombinado = {};

  for (let prop in obj1) {
    objCombinado[prop] = obj1[prop];
  }

  for (let prop in obj2) {
    objCombinado[prop] = obj2[prop];
  }

  return objCombinado;
}

console.log("Objeto 1: ", obj1);

console.log("Objeto 2: ", obj2);

console.log("Objetos combinados: ", combinarObj(obj1, obj2));
