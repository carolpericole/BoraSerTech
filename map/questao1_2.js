//Considere o array abaixo:
const prompt = require("prompt-sync")({signt:true});

const produtos = [
    {
        id: 1,
        nome: 'Galaxy S21',
        preco: 5000
    },
    {
        id: 2,
        nome: 'Galaxy A51',
        preco: 1500
    },
    {
        id: 3,
        nome: 'Iphone 12',
        preco: 12000
    },
    {
        id: 4,
        nome: 'Iphone 6',
        preco: 3000
    },
    {
        id: 5,
        nome: 'Iphone 7',
        preco: 3500
    }
];
/*Crie um código que recebe via inputs o preço máximo e o preço mínimo para realizar uma busca.

Quando o usuário clicar em um botão, faça a busca no array e exiba na tela os produtos encontrados entre preço minimo e máximo.*/

const minimo = (parseFloat(prompt("Digite o preço mínimo: ")));
const maximo = (parseFloat(prompt("Digite o preço máximo: ")));

const valida = produtos.map((prod => {
    if(prod.preco >= minimo && prod.preco <= maximo){
        return prod;
    }
    return null;
}));

console.log(valida);