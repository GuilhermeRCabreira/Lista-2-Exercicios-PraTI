/*42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.*/

console.log("------ Retornando propriedades que são arrays do objeto ------");

let dados = {
  nome: "Guilherme",
  idade: 20,
  endereco: [
    "Rua das Hortências",
    "Bairro do Arvoredo",
    "Cidade San Francisco ",
    "Estado California",
  ],
  telefone: "51 99999-9999",
  email: "email.com",
  notas: [9, 8, 7, 6, 10],
};

function propArrays(objeto) {
  let prop = Object.keys(objeto);
  let propArrays = {};

  prop.forEach((prop) => {
    if (Array.isArray(objeto[prop])) {
      propArrays[prop] = objeto[prop];
    }
  });

  return propArrays;
}

console.log(propArrays(dados));
