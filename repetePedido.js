const rl = require("readline-sync");

const contaRestaurante = [];
let i = 1;
const primeiroPedido = rl.question("Qual seu pedido? ");
contaRestaurante.push({ Pedido: `${primeiroPedido}`, numPedido: `${i}` });
do {
  var pedido = rl.keyInYN(
    "Voce deseja adicionar algo a mais ao seu pedido?  ",
    { limitMessage: "Insira uma resposta valida" }
  );
  if (pedido) {
    i++;
    const proxPedido = rl.question("Qual seu proximo pedido? ");
    contaRestaurante.push({ Pedido: `${proxPedido}`, numPedido: `${i}` });
  }
} while (pedido);

console.log("Você finalizou seu pedido!");

console.log(contaRestaurante);
