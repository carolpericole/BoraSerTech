/*Faça um programa que peça para o usuário digitar um número n e imprima uma lista com todos os números de 0 a n-1.

Exemplo: se o usuário digitar 5, o programa deve imprimir [0, 1, 2, 3, 4]*/

const prompt = require("prompt-sync")({signt:true});

let num = parseInt(prompt("Digite um numero inteiro positivo: "));
const arr = [];
if(num>=0){
    for(let cont = 0; cont< num; cont++){
        arr.push(cont);
    }
}else{
    console.log("O numero digitado é inválido!");
}

console.log(arr)