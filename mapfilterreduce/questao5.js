//Dado um array numérico x, crie um novo array com os elementos do array x que são maiores do que 5.

const arr = [0,9,-1,3,5,7,15,88,-4,95,100];

const valida = x => x > 5;
const arr2 = arr.filter(valida);
console.log(arr2);