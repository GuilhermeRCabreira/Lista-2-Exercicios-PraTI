/*44. Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número.*/

console.log("------ Contando propriedades do tipo string ------");

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

console.log(
  "O objeto possui " + contStrings(dados) + " propriedade(s) do tipo string."
);

function contStrings(objeto) {
  let props = Object.keys(objeto);
  let cont = 0;

  props.forEach((key) => {
    if (typeof objeto[key] === "string") {
      cont++;
    }
  });

  return cont;
}
