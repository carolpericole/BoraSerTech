const prompt = require("prompt-sync")({signt:true});

const nome = (prompt("Digite o nome do aluno: "));
const idade = (parseInt(prompt("Digite a idade do aluno: ")));

const qtdprovas = (parseInt(prompt("Digite a quantidade de provas que o aluno fez:")));
const arrnotas = [];
let sum = 0;
for(let i =0; i<qtdprovas ; i++){
    let nota = (parseFloat(prompt("Digite as notas do aluno: ")));
    arrnotas.push(nota);
    sum+= nota;
}

const media = sum / qtdprovas;
const arrfinal = [];

arrfinal.push(nome);
arrfinal.push(idade);
arrfinal.push(arrnotas);
arrfinal.push(media.toFixed(2));
arrfinal.push((media>5?true:false));

console.log(arrfinal);