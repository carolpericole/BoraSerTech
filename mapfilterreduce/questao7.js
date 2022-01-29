//Dado um vetor de strings, filtre os elementos do vetor para conter apenas strings com 5 caractéres ou menos.

const arr = ["teste","sol","lua","banana","salada","mar","arroz","SerTech"];

const valida = x => {
        if(x.length <=5) return x;
};
const arr2 = arr.filter(valida);
console.log(arr2);