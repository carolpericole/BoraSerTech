//Dado:

const numeros = [1,2,3,2,1,3,3,5,4,6];
//Utilize filter para retornar um novo array sem números repetidos.

const validacao = numeros.filter((arr, val) => numeros.indexOf(arr) === val);
console.log(validacao);