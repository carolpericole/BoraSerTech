//Dado um vetor numérico, filtre os elementos do vetor para conter apenas números pares.

const arr = [0,9,-1,3,5,7,15,88,-4,95,100];

const valida = x => x%2 ==0 ;
const arr2 = arr.filter(valida);
console.log(arr2);