// Crie uma função que ira receber o nome de uma pessoa e sua idade, e ira
// imprimir na tela caso ela tenha mais que 65 anos, que tem o direito de
// aposentadoria.

var prompt = require("prompt-sync")();

var nome = prompt("Digite o seu nome: ");
var idade = Number(prompt("Digite a sua idade: "));

aposentadoria(nome, idade);

function aposentadoria(nome, idade) {
  if (idade >= 65) {
    console.log(`${nome} tem direito a aposentadoria.`);
  } else {
    console.log(`${nome} ainda não tem direito a aposentadoria.`);
  }
}
