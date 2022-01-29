//Dado um vetor de vetores, transforme-me o em vetor um único que contém todos os elementos:

const arr = [["1", "2", "3"],[true], [4, 5, 6]] 

const result = arr.reduce((arr2,item)=> arr2.concat(item), [] );

console.log(result);