/*Faça um programa que, dadas duas listas de mesmo tamanho, crie uma nova lista com cada elemento igual a 
soma dos elementos da lista 1 com os da lista 2, na mesma posição.

Exemplo:

Dadas lista1 = [1, 4, 5] e lista2 = [2, 2, 3], então lista3 = [1+2, 4+2, 5+3] = [3, 6, 8]*/

const arr1 = [1,2,3,4,5,6,7,8,9];
const arr2 = [9,8,7,6,5,4,3,2,1];
const arr3 =[];
for(let i = 0; i < arr1.length; i ++){
    let sum = arr1[i] + arr2 [i];
    arr3.push(sum);
}

console.log(`[${arr3}]`)