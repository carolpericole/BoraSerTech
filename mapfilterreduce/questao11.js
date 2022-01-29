//Dada uma matriz numérica quadrada, utilize o reduce para somar a sua diagonal principal.
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


const somatorio = matrix.reduce((soma, item, index)=> soma + item[index],0);
console.log(somatorio);