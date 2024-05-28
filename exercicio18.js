/*18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.*/

const prompt = require("prompt-sync")();

console.log("------ Registro de Funcionário ------");

let employee = {
  name: input("Digite o nome: "),
  role: input("Digite o cargo: "),
  salary: inputSalary("Digite o salário: "),
};

console.log("Registro do funcionário concluído: ");
console.log(`Nome: ${employee.name}`);
console.log(`Cargo: ${employee.role}`);
console.log(`Salário: R$ ${employee.salary}`);

function input(msg) {
  let info;
  do {
    info = prompt(msg);
    if (!isNaN(info)) {
      console.log("Informe um nome válido.");
    }
  } while (!isNaN(info));
  return info;
}

function inputSalary(msg) {
  let info;
  do {
    info = prompt(msg);
    if (isNaN(info) || info < 0) {
      console.log("Informe um salário válido.");
    }
  } while (isNaN(info) || info < 0);
  return parseFloat(info);
}
