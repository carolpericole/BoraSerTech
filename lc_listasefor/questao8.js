
/*Faça um programa que dadas duas listas de mesmo tamanho, imprima o produto escalar entre elas.

OBS: produto escalar é a soma do resultado da multiplicação entre o número na posição i da lista1 
pelo número na posição i da lista2, com i variando de 0 ao tamanho da lista.*/

const arr1 = [1,2,3,4,5,6,7,8,9];
const arr2 = [9,8,7,6,5,4,3,2,1];
let sum = 0;
for(let i = 0; i < arr1.length; i ++){
    sum += arr1[i] * arr2 [i];    
}

console.log(`O produto escalar entre as duas listas é: ${sum}`)