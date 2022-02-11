const {maioridade, imprimeidade} = require('./verificador-de-idade');

const args = process.argv;
const idade = args[2];

imprimeidade(idade);
console.log(maioridade(idade));


