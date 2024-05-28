/*19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.*/

const prompt = require("prompt-sync")();

console.log("------ Horários ------");

let hours = [];

readHours(hours);

console.log("Horários informados: ");

hours.forEach((hour) => {
  console.log(hour);
});

function input(msg) {
  let info;
  do {
    info = prompt(msg);
    if (!info.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
      console.log("Informe um horário válido.");
    }
  } while (!info.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/));
  return info;
}

function readHours(hours) {
  for (let i = 0; i < 5; i++) {
    hours.push(input("Digite um horário no formato HH:MM:SS: "));
  }
}
