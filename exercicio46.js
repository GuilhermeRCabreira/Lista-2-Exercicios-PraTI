/*46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.*/

console.log("------ Somando vendas por vendedor ------");

let vendas = [
  { vendedor: "Caio", valor: 189.9 },
  { vendedor: "Caio", valor: 287 },
  { vendedor: "Caio", valor: 560 },
  { vendedor: "Davi", valor: 1000 },
  { vendedor: "Davi", valor: 556 },
  { vendedor: "Maria", valor: 600 },
  { vendedor: "Maria", valor: 700 },
  { vendedor: "Maria", valor: 800 },
];

console.log(somarVendas(vendas));

function somarVendas(arr) {
  let objeto = {};

  arr.forEach((venda) => {
    if (objeto[venda.vendedor]) {
      objeto[venda.vendedor] += venda.valor;
    } else {
      objeto[venda.vendedor] = venda.valor;
    }
  });

  return objeto;
}
