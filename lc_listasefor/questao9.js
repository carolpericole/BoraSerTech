const prompt = require("prompt-sync")({signt:true});

let i = 0;
const arr = [];
const arr2 =[];
do{let num = (prompt("Digite um numero: "));

    arr.push(num);
    i++;

}while(i<5)

console.log(arr);

//QUESTÃO10:
/*Pegue a lista gerada no exercício anterior e transforme cada um dos itens dessa lista em um float.
OBS: Não é para alterar o programa anterior, mas sim a lista gerada por ele.*/
for(let j = 0; j< arr.length; j++){
    let num = parseFloat(arr[j])
    arr2.push(num);
}

console.log(arr2);