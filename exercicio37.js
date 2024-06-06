/*37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.*/

const prompt = require("prompt-sync")();

console.log("---- Correção de Prova ----");

let gabarito = [];
let respostasAluno = [];
let aluno=[];

for (let i = 0; i < 20; i++) {
    gabarito.push(prompt(`Digite a resposta da questão ${i + 1} do gabarito: `));
}

let continuar = "s";

for (let i = 0; i < 50 && continuar.toLowerCase() === "s"; i++) {
   
    let aluno = {
        numeroId: input(`Digite um número para identificar o aluno ${i + 1}: `),
        respostas: [],
      };

      for (let j = 0; j < 20; j++) {
        aluno.respostas.push(prompt(`Digite a resposta da questão ${j + 1} do aluno ${i + 1}: `));
      }

        respostasAluno.push(aluno);

        continuar = prompt("Deseja continuar? (s/n) \nVocê pode cadastrar até 50 alunos.");

    
  }

  respostasAluno.forEach((aluno) => {
    let acertos = 0;
    for (let i = 0; i < 20; i++) {
      if (aluno.respostas[i] === gabarito[i]) {
        acertos++;
      }
    }
    console.log(`O aluno ${aluno.numeroId} acertou ${acertos} questões.`);
    if (acertos >= 12) {
      console.log("APROVADO");
    } else {
      console.log("REPROVADO");
    }
  });




function input(msg) {
        let numero;
        do {
          numero = prompt(msg);
          if (parseFloat(numero) <= 0 || isNaN(parseFloat(numero))) {
            console.log("Erro, você deve informar um número maior que zero.");
          }
        } while (parseFloat(numero) <= 0 || isNaN(parseFloat(numero)));
        return parseFloat(numero);
      }

