/*41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.*/

console.log("------ Acessando propriedades de um objeto ------");

let pessoa = {
  nome: "Guilherme",
  idade: 20,
};

console.log("Idade:" + pessoa.idade);

pessoa.email = "email@gmail.com";

console.log(pessoa);
