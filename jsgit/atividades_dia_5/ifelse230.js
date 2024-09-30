//Faça um script que pergunte em que turno você estuda. Peça para digitar
//M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom
//Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

var prompt = require("prompt-sync")();

var pergunta = prompt("Digite o período no qual você está matriculado: M-matutino ou V-Vespertino ou N- Noturno ");

var turno = pergunta.toUpperCase();

if( turno == 'M'){
    console.log("Bom dia!");
}
else if( turno == 'V'){
    console.log("Boa tarde!");
}
else if( turno == 'N'){
    console.log("Boa noite!");
}
else{
    console.log("Valor inválido!");
}
