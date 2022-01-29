//Crie uma função para gerar um número inteiro aleatório entre -10 e 10. Em seguida, utilize a função map 
//e a função criada para construir um array com 20 números inteiros aleatórios entre -10 e 10.

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arr = new Array(20);
arr.fill(0);

const arr2 = arr.map(x => x = (getRandom(-10,10)));
console.log(arr2);