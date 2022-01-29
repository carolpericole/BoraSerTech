/*Agora usando a função max() faça um programa que imprima os três maiores números de uma lista.

Dica: Use o método próprio de listas .remove().*/

// Funcao para retornar o menor valor de um array
function min (array) {
    return Math.min.apply(Math, array);
};

// Funcao para retornar o maior valor de um array
function max (array) {
    return Math.max.apply(Math, array);
};

const arr = [0,15,18,49,5,3,9,10,51,32,77,99,4,33];
const arr2 = [];
for(let num = 0; num < 3; num ++){
    let numax = max(arr);
    let index = arr.indexOf(numax);
    let remove = arr.splice(index,1);
    arr2.push(remove);
}


console.log (`Os três maiores numeros do array são: ${arr2}`);


