// Funcao para retornar o menor valor de um array
function min (array) {
    return Math.min.apply(Math, array);
};

// Funcao para retornar o maior valor de um array
function max (array) {
    return Math.max.apply(Math, array);
};

//Função para sortear numero
function getRandom(max) {
    return Math.floor(Math.random() * max + 1);
}
let sum = 0;
const arr = [];
for(let i= 0; i<10; i ++){
    let num = getRandom(100);
    arr.push(num);
    sum += num;
}

console.log(`\nA lista gerada foi: [${arr}]`);
console.log(`\nO maior numero da lista é: [${max(arr)}]`);
console.log(`\nO menor numero da lista é: [${min(arr)}]`);
console.log(`\nA média dos numeros da lista é: [${sum/10}]`);
console.log(`\nO somatórios dos numeros da lista é: [${sum}]`);