// Faça um script para o cálculo de salário liquido(utilize variáveis), sabendo
// que os descontos são do Imposto de Renda, que depende do salário bruto
// (conforme tabela abaixo). O sistema deve apresentar além da mensagem
// pedindo o valor de seu salário, uma mensagem que se caso o funcionário
// pague pensão alimentícia deverá descontar mais 20%do seu salário. O
// Salário Líquido corresponde ao Salário Bruto menos os descontos. Além o
// IR e Pensão, serão descontados INSS e FGTS conforme indicado abaixo.
// Desconto do IR:
// Salário Bruto até 1250 (inclusive) - isento
// Salário Bruto até 2500 (inclusive) - desconto de 5%
// Salário Bruto até 4500 (inclusive) - desconto de 10%
// Salário Bruto acima de 4500 - desconto de 20% Imprima na tela as
// informações, dispostas conforme o exemplo abaixo.
// Salário Bruto: : R$ 3000,00
// (-) IR (5%) : R$ 150,00
// (-) INSS ( 10%) : R$ 300,00
// FGTS (11%) : R$ 330,00
//  Pensão(20%) : R$ 600,00
// Total de descontos : R$ 1380,00
// Salário Liquido : R$ 1620,00

var prompt = require("prompt-sync")();

var salarioBruto = Number(prompt("Digite o valor do seu salário bruto: "));
var pensao = prompt("Você paga pensão alimentícia? S/N: ");
var pensao = pensao.toUpperCase();
var descontoPensao = 0;
var descontoIR;
var descontoINSS;
var descontoFGTS;
var totalDescontos;
var salarioLiquido;

if(pensao == 'S'){
    descontoPensao = salarioBruto * 0.2;
}

if(salarioBruto <= 1250){
    descontoIR = 0;
}
else if(salarioBruto <= 2500){
    descontoIR = salarioBruto * 0.05;
}
else if(salarioBruto <= 4500){
    descontoIR = salarioBruto * 0.1;
}
else{
    descontoIR = salarioBruto * 0.2;
}

descontoINSS = salarioBruto * 0.1;
descontoFGTS = salarioBruto * 0.11;
totalDescontos = descontoIR + descontoINSS + descontoFGTS + descontoPensao;
salarioLiquido = salarioBruto - totalDescontos;

console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
console.log(`(-) IR: R$ ${descontoIR.toFixed(2)}`);
console.log(`(-) INSS: R$ ${descontoINSS.toFixed(2)}`);
console.log(`FGTS: R$ ${descontoFGTS.toFixed(2)}`);
console.log(`Pensão: R$ ${descontoPensao.toFixed(2)}`);
console.log(`Total de descontos: R$ ${totalDescontos.toFixed(2)}`);
console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);





