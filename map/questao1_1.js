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
    }
];
/*Crie um código que receba a porcentagem de desconto que vai insidir sob o preço dos produtos e siga as regras de validação abaixo:

Utilize map para gerar o novo array que possue uma propriedade com o valor do produto com desconto
Exiba na tela em um UL o nome de cada produto, preço atual, preço com desconto. */

const desc = parseFloat(prompt("Digite a porcentagem de desconto: "));

const aplicadesc = produtos.map(p => ({
    nome: p.nome,
    preco:p.preco,
    desconto: (p.preco - (p.preco*(desc/100))),
}))

console.log(aplicadesc);