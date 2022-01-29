//Dado o vetor:

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//Utilize filter para selecionar todos os números primos do array.

const validacao = numarray => {
    for (let i = 2; i < numarray; i++)
      if (numarray % i === 0) {
        return false;
      }
    return numarray > 1;
  };
  
const result = array.filter(validacao);

console.log(result);