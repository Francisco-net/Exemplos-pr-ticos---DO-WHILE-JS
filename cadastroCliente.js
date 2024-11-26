// O programa deve continuar perguntando o nome de clientes e adicioná-los a uma lista até que o usuário insira "sair".

const rl = require('readline-sync');

let clientes = [];
let i = 1;
do {
    var addUser = rl.question('Indique o nome do cliente: ');
    if (addUser !== "sair") {
        clientes.push({ Cliente: `${addUser}`, numCliente: `${i}` });
    }
    i++;
} while (addUser !== "sair");

console.log('Você saiu do cadastro de clientes');
console.log(clientes);