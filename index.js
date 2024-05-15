const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Digite o número do exercício que deseja executar: ",
  (exercicio) => {
    const exercicioPath = `exercicio${exercicio}.js`;

    fs.access(exercicioPath, fs.constants.F_OK, (err) => {
      if (err) {
        console.error(`O exercício ${exercicio} não existe.`);
        rl.close();
        return;
      }

      const exercicioCode = fs.readFileSync(exercicioPath, "utf8");
      eval(exercicioCode);

      rl.close();
    });
  }
);
