
//Use a função reduce para transformar um vetor numérico em uma string com todos os números como caractéres.
const arr = [1,2,3,4] ;

const result = arr.reduce((arr2,item)=> arr2.concat(item), '');

console.log(result);