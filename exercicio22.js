/*22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.*/

const prompt = require("prompt-sync")();

console.log("------ Pesquisa Prefeitura ------");

let habitantes = [];

readHabitantes(habitantes);

let mediaSalario = calculateMediaSalario(habitantes);

let mediaFilhos = calculateMediaFilhos(habitantes);

let maiorSalario = calculateMaiorSalario(habitantes);

let percentualSalario = calculatePercentualSalario(habitantes);

console.log(
  `Média salarial: R$ ${mediaSalario.toFixed(
    2
  )}\nMédia de filhos: ${mediaFilhos.toFixed(
    2
  )}\nMaior salário: R$ ${maiorSalario.toFixed(
    2
  )}\nPercentual de pessoas com salário até R$ 350,00: ${percentualSalario.toFixed(
    2
  )}%`
);

function calculateMediaSalario(habitantes) {
  let totalSalario = 0;
  habitantes.forEach((habitante) => {
    totalSalario += habitante.Salario;
  });
  return totalSalario / habitantes.length;
}

function calculateMediaFilhos(habitantes) {
  let totalFilhos = 0;
  habitantes.forEach((habitante) => {
    totalFilhos += habitante.Filhos;
  });
  return totalFilhos / habitantes.length;
}

function calculateMaiorSalario(habitantes) {
  let maiorSalario = 0;
  habitantes.forEach((habitante) => {
    if (habitante.Salario > maiorSalario) {
      maiorSalario = habitante.Salario;
    }
  });
  return maiorSalario;
}

function calculatePercentualSalario(habitantes) {
  let totalSalario350 = 0;
  habitantes.forEach((habitante) => {
    if (habitante.Salario <= 350) {
      totalSalario350++;
    }
  });
  return (totalSalario350 / habitantes.length) * 100;
}

function input(msg) {
  let info;
  do {
    info = prompt(msg);
    if (isNaN(info) || info < 0) {
      console.log("Informe um valor válido.");
    }
  } while (isNaN(info) || info < 0);
  return parseFloat(info);
}

function readHabitantes(habitantes) {
  let salario;
  let addMore;
  do {
    habitantes.push({
      Salario: (salario = input("Digite o salário: ")),
      Filhos: input("Digite o número de filhos: "),
    });

    addMore = prompt("Deseja adicionar mais habitantes? (s/n): ");
  } while (addMore.toLowerCase() === "s");
}
