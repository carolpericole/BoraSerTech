//Considere o array abaixo:

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
//Crie uma função que exiba na tela cada produto, com seu nome, preço e posição na lista(índice).

const result = produtos.map ((p,index) => ({
    nome: p.nome,
    preco: p.preco,
    posicao: index,

}));

console.log(result);