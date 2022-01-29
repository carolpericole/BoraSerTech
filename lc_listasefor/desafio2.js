// Funcao para retornar o menor valor de um array
function min (array) {
    return Math.min.apply(Math, array);
};

// Funcao para retornar o maior valor de um array
function max (array) {
    return Math.max.apply(Math, array);
};

const prompt = require("prompt-sync")({signt:true});
//Declarando as variáveis
const arrnotas = [];
const arrfinal = [];
let index = 0;
let remove = 0;
let sum = 0;
let media = 0;
let nota = 0;
let i = 0;

const nome = (prompt("Digite o nome do aluno: "));
const idade = (parseInt(prompt("Digite a idade do aluno: ")));
const qtdprovas = (parseInt(prompt("Digite a quantidade de provas que o aluno fez:")));



if(qtdprovas >2){
    //Insere as notas no array
    for(i =0; i<qtdprovas ; i++){
        nota = (parseFloat(prompt("Digite as notas do aluno: ")));
        arrnotas.push(nota);
    
    }
    //copia o array
    const arrnotas2 = [... arrnotas];

    //remove a maior nota
    const numax = max(arrnotas2);
    index = arrnotas2.indexOf(numax);
    remove = arrnotas2.splice(index,1);

    //remove a menor nota
    const nummin = min(arrnotas2);
    index = arrnotas2.indexOf(nummin);
    remove = arrnotas2.splice(index,1);

    //calcula a media
    for(i = 0; i < arrnotas2.length; i++){
        sum += arrnotas2[i];
    }
    media = sum / (qtdprovas - 2);

    
    //Cria o array final
    arrfinal.push(nome);
    arrfinal.push(idade);
    arrfinal.push(arrnotas);
    arrfinal.push(media.toFixed(2));
    arrfinal.push((media>5?true:false));

    //imprime array final
    console.log(arrfinal);
}
else{
    console.log("Quantidade de provas precisa ser maior que dois!");
}