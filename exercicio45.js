/*45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.*/

console.log("------ Contando strings em um array ------");

let strings = [
  "Machado de Assis",
  "William Shakespeare",
  "Clarice Lispector",
  "Monteiro Lobato",
  "Érico Veríssimo",
  "George Orwell",
  "Machado de Assis",
  "Clarice Lispector",
  "William Shakespeare",
  "Clarice Lispector",
  "Monteiro Lobato",
  "Érico Veríssimo",
  "Machado de Assis",
  "Machado de Assis",
  "Machado de Assis",
  "Machado de Assis",
  "Machado de Assis",
  "George Orwell",
];

function contStrings(arr) {
  let obj = {};

  arr.forEach((str) => {
    if (obj[str]) {
      obj[str]++;
    } else {
      obj[str] = 1;
    }
  });

  return obj;
}

console.log(contStrings(strings));
