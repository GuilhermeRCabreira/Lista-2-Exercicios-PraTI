/*20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).*/

const prompt = require("prompt-sync")();

console.log("------ Folha de Pagamento ------");

let employees = [];

readEmployees(employees);

console.log("Contracheques: ");

displayEmployees(employees);

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
      console.log("Informe um valor válido.");
    }
  } while (isNaN(info) || info < 0);
  return parseFloat(info);
}

function readEmployees(employees) {
  let grossSalary;
  for (let i = 0; i < 80; i++) {
    employees.push({
      Matricula: inputSalary("Digite a matrícula: "),
      Nome: input("Digite o nome: "),
      SalárioBruto: (grossSalary = inputSalary("Digite o salário bruto: ")),
      ReducaoINSS: calculateInss(grossSalary),
      SalárioLíquido: calculateNetSalary(grossSalary),
    });

    let addMore = prompt("Deseja adicionar mais funcionários? (s/n): ");
    if (addMore.toLowerCase() !== "s") {
      break;
    }
  }
}

function calculateInss(grossSalary) {
  return grossSalary * 0.12;
}

function calculateNetSalary(grossSalary) {
  return grossSalary - calculateInss(grossSalary);
}

function displayEmployees(employees) {
  console.table(employees);
}
