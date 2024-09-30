//Faça um script que receba o valor do limite de um cartão de crédito(ex= 500),
//receba o valor de 4 produtos comprados, faça a soma dos valores e verifique se
//o limite do cartão será suficiente.

var prompt = require("prompt-sync")();
var limite = Number(prompt("Digite o limite do cartão de crédito: "));
var produto1 = Number(prompt("Digite o valor do 1º produto: "));
var produto2 = Number(prompt("Digite o valor do 2º produto: "));
var produto3 = Number(prompt("Digite o valor do 3º produto: "));
var produto4 = Number(prompt("Digite o valor do 4º produto: "));

var total = produto1 + produto2 + produto3 + produto4;

if (total <= limite) {
  console.log("Compra realizada com sucesso!");
} else {
  console.log("Compra não realizada. Limite excedido!");
}
