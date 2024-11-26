const rl = require("readline-sync");

do {
  var numSorteio = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  var numUser = rl.questionInt("Tente advinhar o numero sorteado: ", {
    limitMessage: "Insira um valor valido!",
  });
  if (numUser != numSorteio) {
    console.log(`O número sorteado foi ${numSorteio}`);
    console.log("Você errou o número tente novamente");
  } else {
    console.log(`O número sorteado foi ${numSorteio}`);
    console.log("Parabéns você acertou!!!");
  }
} while (numUser != numSorteio);
