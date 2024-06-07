/*50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
nomeCliente.
2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
cliente.
3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um
único hotel.

4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a
disponibilidade de quartos.
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
avaliações dentro do objeto do hotel.*/

const prompt = require("prompt-sync")();

let hoteis = [
  {
    id: 1,
    nome: "Hotel Plaza",
    cidade: "São Paulo",
    quartosTotais: 100,
    quartosDisponiveis: 80,
  },
  {
    id: 2,
    nome: "Hotel Estrela",
    cidade: "Rio de Janeiro",
    quartosTotais: 150,
    quartosDisponiveis: 120,
  },
  {
    id: 3,
    nome: "Hotel Central",
    cidade: "Brasília",
    quartosTotais: 80,
    quartosDisponiveis: 50,
  },
  {
    id: 4,
    nome: "Hotel Parque",
    cidade: "Curitiba",
    quartosTotais: 120,
    quartosDisponiveis: 100,
  },
  {
    id: 5,
    nome: "Hotel Oásis",
    cidade: "Fortaleza",
    quartosTotais: 200,
    quartosDisponiveis: 180,
  },
  {
    id: 6,
    nome: "Hotel do Bosque",
    cidade: "Gramado",
    quartosTotais: 50,
    quartosDisponiveis: 30,
  },
  {
    id: 7,
    nome: "Hotel das Montanhas",
    cidade: "Campos do Jordão",
    quartosTotais: 80,
    quartosDisponiveis: 60,
  },
  {
    id: 8,
    nome: "Hotel Marítimo",
    cidade: "Florianópolis",
    quartosTotais: 120,
    quartosDisponiveis: 100,
  },
  {
    id: 9,
    nome: "Hotel Serra Verde",
    cidade: "Belo Horizonte",
    quartosTotais: 90,
    quartosDisponiveis: 70,
  },
  {
    id: 10,
    nome: "Hotel Praia Azul",
    cidade: "Salvador",
    quartosTotais: 150,
    quartosDisponiveis: 130,
  },
];
1;

let reservas = [{ idReserva: 1, idHotel: 1, nomeCliente: "Joao" }];

console.log("------ Sistema de Reserva de Hotéis ------");

console.log("Bem-vindo ao sistema de reserva de hotéis!\nComo podemos ajudar?");

let opcao = prompt(
  "1-Adicionar hotel\n2-Buscar hotéis por cidade\n3-Fazer reserva\n4-Cancelar reserva\n5-Listar reservas\n6-Fazer Check-in\n7-Fazer Check-out\n8-Relatório de ocupação\n9-Avaliar hotel\n10-Sair"
);

while (opcao != 10) {
  switch (opcao) {
    case "1":
      adicionarHotel();
      break;
    case "2":
      buscarHoteisPorCidade();
      break;
    case "3":
      fazerReserva();
      break;
    case "4":
      cancelarReserva();
      break;
    case "5":
      listarReservas();
      break;
    case "6":
      fazerCheckIn();
      break;
    case "7":
      fazerCheckOut();
      break;

    case "8":
      gerarRelatorioOcupacao();
      break;

    case "9":
      avaliarHotel();
      break;

    default:
      console.log("Opção inválida.");
  }

  opcao = prompt(
    "1-Adicionar hotel\n2-Buscar hotéis por cidade\n3-Fazer reserva\n4-Cancelar reserva\n5-Listar reservas\n6-Fazer Check-in\n7-Fazer Check-out\n8-Relatório de ocupação\n9-Avaliar hotel\n10-Sair"
  );
}

function adicionarHotel() {
  let hotel = {
    id: hoteis.length + 1,
    nome: prompt("Digite o nome do hotel: "),
    cidade: prompt("Digite a cidade do hotel: "),
    quartosTotais: input("Digite o número total de quartos: "),
    quartosDisponiveis: input("Digite o número de quartos disponíveis: "),
  };
  if (hotel.quartosDisponiveis > hotel.quartosTotais) {
    console.log(
      "Erro: o número de quartos disponíveis não pode ser maior que o número total de quartos."
    );
    return;
  }
  hoteis.push(hotel);

  console.log("Hotel adicionado com sucesso!");
}

function buscarHoteisPorCidade() {
  let cidade = prompt("Digite a cidade desejada: ");

  let hoteisCidade = hoteis.filter((hotel) => hotel.cidade === cidade);

  if (hoteisCidade.length === 0) {
    console.log("Nenhum hotel encontrado nessa cidade.");
  } else {
    console.log("Hotéis encontrados: ", hoteisCidade);
  }
}

function fazerReserva() {
  let idHotel = input("Digite o ID do hotel: ");

  let hotel = hoteis.find((hotel) => hotel.id === idHotel);

  if (!hotel) {
    console.log("Hotel não encontrado.");
    return;
  }

  if (hotel.quartosDisponiveis === 0) {
    console.log("Não há quartos disponíveis nesse hotel.");
    return;
  }

  let reserva = {
    idReserva: reservas.length + 1,
    idHotel: idHotel,
    nomeCliente: prompt("Digite o nome do cliente: "),
  };

  reservas.push(reserva);

  hotel.quartosDisponiveis--;

  console.log("Reserva realizada com sucesso!");
}

function cancelarReserva() {
  let idReserva = input("Digite o ID da reserva: ");

  let reserva = reservas.find((reserva) => reserva.idReserva === idReserva);

  if (!reserva) {
    console.log("Reserva não encontrada.");
    return;
  }

  let hotel = hoteis.find((hotel) => hotel.id === reserva.idHotel);

  if (!hotel) {
    console.log("Hotel não encontrado.");
    return;
  }

  hotel.quartosDisponiveis++;

  reservas = reservas.filter((reserva) => reserva.idReserva !== idReserva);

  console.log("Reserva cancelada com sucesso!");
}

function listarReservas() {
  console.log("Reservas: ", reservas);
}

function fazerCheckIn() {
  let idHotel = input("Digite o ID do hotel: ");

  let hotel = hoteis.find((hotel) => hotel.id === idHotel);

  if (!hotel) {
    console.log("Erro: hotel não encontrado.");
    return;
  }

  hotel.quartosDisponiveis++;

  console.log("Check-in realizado com sucesso!");
}

function fazerCheckOut() {
  let idHotel = input("Digite o ID do hotel: ");

  let hotel = hoteis.find((hotel) => hotel.id === idHotel);

  if (!hotel) {
    console.log("Erro: hotel não encontrado.");
    return;
  }

  if (hotel.quartosDisponiveis === 0) {
    console.log("Erro: não há quartos ocupados nesse hotel.");
    return;
  }

  hotel.quartosDisponiveis--;

  console.log("Check-out realizado com sucesso!");
}

function gerarRelatorioOcupacao() {
  let idHotel = input("Digite o ID do hotel: ");

  let hotel = hoteis.find((hotel) => hotel.id === idHotel);

  if (!hotel) {
    console.log("Erro: hotel não encontrado.");
    return;
  }

  let reservasHotel = reservas.filter((reserva) => reserva.idHotel === idHotel);

  console.log(`Relatório de Ocupação para o Hotel ${hotel.nome}:`);
  console.log("------------------------------");
  console.log("ID Reserva | Nome do Cliente");
  console.log("------------------------------");
  reservasHotel.forEach((reserva) => {
    console.log(`${reserva.idReserva} | ${reserva.nomeCliente}`);
  });
  console.log("------------------------------");
}

function avaliarHotel() {
  let idHotel = input("Digite o ID do hotel que deseja avaliar: ");

  let hotel = hoteis.find((hotel) => hotel.id === idHotel);

  if (!hotel) {
    console.log("Erro: hotel não encontrado.");
    return;
  }

  let avaliacao = prompt("Digite sua avaliação para o hotel: ");

  if (!hotel.avaliacoes) {
    hotel.avaliacoes = [];
  }

  hotel.avaliacoes.push(avaliacao);

  console.log("Avaliação realizada com sucesso!");
}

function input(msg) {
  let numero;
  do {
    numero = prompt(msg);
    if (parseFloat(numero) < 0 || isNaN(parseFloat(numero))) {
      console.log("Erro, você deve informar um número maior que zero.");
    }
  } while (parseFloat(numero) < 0 || isNaN(parseFloat(numero)));
  return parseFloat(numero);
}
