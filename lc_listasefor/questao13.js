//Função para sortear numero
function getRandom(max) {
    return Math.floor(Math.random() * max + 1);
}

const arr = [];
for(let i= 0; i<10; i ++){
    let num = getRandom(100);
    arr.push(num);
}
console.log(`\nA lista gerada foi: [${arr}]`);

let sum = 0;
for(let i = 0; i < arr.length ; i++){
    if(arr[i] >50){
        sum ++;
    }
}

console.log(`\nNa lista gerada temos ${sum} numeros maiores que 50.`);
