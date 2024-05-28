/*21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.*/

const prompt = require("prompt-sync")();

console.log("------ Peso Ideal ------");

let alt = input("Digite a altura: ");

let sexo = inputSexo("Digite o sexo (M/F): ");

let pesoIdeal = calculateIdealWeight(alt, sexo);

console.log(
  `O peso ideal para uma pessoa do sexo ${sexo.toUpperCase()} com ${alt}m é ${pesoIdeal.toFixed(
    3
  )}kg.`
);

function calculateIdealWeight(alt, sexo) {
  if (sexo.toUpperCase() === "M") {
    return 72.7 * alt - 58;
  } else if (sexo.toUpperCase() === "F") {
    return 62.1 * alt - 44.7;
  }
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

function inputSexo(msg) {
  let info;
  do {
    info = prompt(msg);
    if (info.toUpperCase() !== "M" && info.toUpperCase() !== "F") {
      console.log("Informe um valor válido.");
    }
  } while (info.toUpperCase() !== "M" && info.toUpperCase() !== "F");
  return info;
}
