//Faça um programa que olhe todos os itens de uma lista e diga quantos deles são pares.

const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let cont = 0
for(let i = 0; i < arr.length; i++){
    if(arr[i]%2===0){
        cont++;
    }
}
console.log("Na lista temos "+cont+" numeros pares.")