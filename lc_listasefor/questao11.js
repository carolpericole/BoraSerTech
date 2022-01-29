/*Faça um programa que peça as 4 notas bimestrais e mostre a média aritmética delas, usando listas.*/


const prompt = require("prompt-sync")({signt:true});

let i = 0;
const arr = [];
do{let num = (parseFloat(prompt("Digite a média: ")));

    arr.push(num);
    i++;

}while(i<4)

let media = (arr[0] + arr[1] + arr[2] + arr[3])/4;

console.log("A média é: "+media.toFixed(2));