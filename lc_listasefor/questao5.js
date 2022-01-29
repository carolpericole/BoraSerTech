//Faça um programa que imprima o maior número de uma lista, sem usar a função max().

const arr = [0,15,18,49,5,3,9,10,51,32,77,99,4,33];
arr.sort(function(a,b){
    if(a>b) return 1;
    if (a<b) return -1;
    return 0;
});

console.log(arr)
console.log("O maior numero da lista é: "+arr[arr.length -1])