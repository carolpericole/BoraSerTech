function maioridade(idade){
    idade = Number.parseInt(idade);
    if(Number.isNaN(idade)){
        throw new Error('input invalido');
    }
    return idade >= 18;
}

function imprimeidade(idade) {
    console.log(`A Idade é ${idade}`);
}

module.exports = {
    maioridade,
    imprimeidade,

};