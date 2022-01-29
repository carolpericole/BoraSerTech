/*Sorteie uma lista de 10 números e imprima:

a. uma lista com os 4 primeiros números;

b. uma lista com os 5 últimos números;

c. uma lista contendo apenas os elementos das posições pares;

d. uma lista contendo apenas os elementos das posições ímpares;

e. a lista inversa da lista sorteada (isto é, uma lista que começa com o último elemento da lista sorteada e termina com o primeiro);

f. uma lista inversa dos 5 primeiros números;

g. uma lista inversa dos 5 últimos números.*/




//Função para sortear numero
function getRandom(max) {
    return Math.floor(Math.random() * max + 1)
}

const arr = [];
for(let i= 0; i<10; i ++){
    let num = getRandom(100);
    arr.push(num);
}
console.log(`\nA lista gerada foi: [${arr}]`)

const arr2 = [...arr];
const responseA = arr2.splice(0,4);
console.log(`\nOs 4 primeiros numeros da lista são: [${responseA}] `);
const responseB = arr2.splice(1);
console.log(`\nOs 5 ultimos numeros da lista são:  [${responseB}] `);

const arrpar= [];
const arrimpar= [];

let num2 = 0;
for(let j = 0; j < arr.length ; j++){
    
    if(j%2===0){
        num2 = arr[j];
        arrpar.push(num2);
    }
    else{
        num2 = arr[j];
        arrimpar.push(num2);
    }

};
console.log(`\nOs elementos das posições pares são: [${arrpar}]`);
console.log(`\nOs elementos das posições impares são: [${arrimpar}]`);

const arr3 = [...arr];
arr3.reverse();


console.log(`\nA lista inversa é: [${arr3}]`);

const responseF = arr3.splice(0,5);
console.log(`\nOs 5 primeiros numeros da lista inversa são: [${responseF}] `);

console.log(`\nOs 5 ultimos numeros da lista inversa são:  [${arr3}] \n`);