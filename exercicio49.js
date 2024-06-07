/* 49. Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.*/

console.log("------ Agrupando transações por categoria ------");

let transacoes = [
  {
    id: 1,
    valor: 100,
    data: "10/01/2020",
    categoria: "Alimentação",
  },
  {
    id: 2,
    valor: 150,
    data: "10/01/2020",
    categoria: "Transporte",
  },
  {
    id: 3,
    valor: 200,
    data: "12/01/2020",
    categoria: "Alimentação",
  },
  {
    id: 4,
    valor: 250,
    data: "15/01/2020",
    categoria: "Transporte",
  },
  {
    id: 5,
    valor: 300,
    data: "17/01/2020",
    categoria: "Alimentação",
  },
];

console.log("Transações: ", transacoes);

let transacoesAgrupadas = agruparTransacoes(transacoes);

console.log(
  "Transações agrupadas por categoria: ",
  JSON.stringify(transacoesAgrupadas, null, 2)
);

function agruparTransacoes(transacoes) {
  let categorias = {};

  transacoes.forEach((transacao) => {
    const { categoria, valor } = transacao;

    if (!categorias[categoria]) {
      categorias[categoria] = {
        transacoes: [transacao],
        subtotal: valor,
      };
    } else {
      categorias[categoria].transacoes.push(transacao);
      categorias[categoria].subtotal += valor;
    }
  });

  return categorias;
}
