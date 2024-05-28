/* 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário. */

const prompt = require("prompt-sync")();

console.log("------ Salário dos funcionários ------");

let salario;
let sexo;
let continuar = true;
let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;

while (continuar) {
  salario = input("Informe o salário do funcionário: ");
  sexo = inputSexo("Informe o sexo do funcionário (M/F): ");

  if (sexo == "M") {
    totalSalarioHomens += salario;
  } else {
    totalSalarioMulheres += salario;
  }

  continuar = inputContinuar("Deseja continuar? (S/N): ");
}

console.log(
  `Total de salário pago aos homens: R$ ${totalSalarioHomens.toFixed(2)}`
);

console.log(
  `Total de salário pago às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`
);

function input(msg) {
  let num;
  do {
    num = prompt(msg);
    if (parseFloat(num) <= 0 || isNaN(parseFloat(num))) {
      console.log("Erro, você deve informar um número maior que zero.");
    }
  } while (parseFloat(num) <= 0 || isNaN(parseFloat(num)));
  return parseFloat(num);
}

function inputSexo(msg) {
  let sexo;
  do {
    sexo = prompt(msg);
    if (sexo != "M" && sexo != "F") {
      console.log("Erro, você deve informar M ou F.");
    }
  } while (sexo != "M" && sexo != "F");
  return sexo;
}

function inputContinuar(msg) {
  let continuar;
  do {
    continuar = prompt(msg);
    if (continuar != "S" && continuar != "N") {
      console.log("Erro, você deve informar S ou N.");
    }
  } while (continuar != "S" && continuar != "N");
  return continuar == "S";
}
