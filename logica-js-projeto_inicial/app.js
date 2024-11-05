alert("Boas vindas ao jogo do número secreto");

let chute = prompt("Escolha um número entre 1 e 100");
console.log("Valor do chute:", chute);

let numeroSecreto = parseInt(Math.random() * 100 + 1);
let tentativas = 0;

console.log("Resultado da comparação:", chute == numeroSecreto);

while (chute != numeroSecreto) {
  chute = prompt("Escolha um número entre 1 e 100");

  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 0 ? "tentativa" : "tentativas";
alert(
  `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`
);

//if (tentativas > 1){
//   alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas}`);
//} else{
//   alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas}`);
//}
