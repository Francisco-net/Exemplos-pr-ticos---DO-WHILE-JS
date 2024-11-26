const rl = require('readline-sync');

senha = 1234;

do {
    var pin = rl.questionInt('Qual e o seu PIN (max 4 digitos)', { limitMessage: 'Insira um valor valido' });
    if (pin != senha) {
        console.log('PIN incorreto');
    }
} while (pin != senha);

console.log('PIN correto!');
