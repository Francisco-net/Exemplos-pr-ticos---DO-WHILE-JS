const rl = require('readline-sync');

do {
    
    var codigoProduto = rl.question('Indique o codigo do produto (comece com a letra P maiuscula): ');
    if (codigoProduto && codigoProduto.charAt(0) === 'P') {
        console.log("Código válido!");
    } else {
        console.log("Código inválido! O código deve começar com a letra 'P' maiúscula!");
    };


    // Continua pedindo até o código começar com 'P'
} while (!codigoProduto || codigoProduto.charAt(0) !== 'P');
