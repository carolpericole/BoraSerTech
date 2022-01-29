/*Crie um Sistema de Recursos Humanos onde podemos adicionar colaboradores com as seguintes características:

Id(Deve ser único);
Nome;
Idade;
Cargo;
Salário;
Data de admissão(Utilize input do tipo 'date' para facilitar);
O sistema deve ter as seguintes ações:

Adicionar colaborador(Sempre limpar inputs após adicionar);
Remover colaborador;
Busca em tempo real(a cada tecla que colocamos no input) e avançada por id/nome/cargo;
Obs: Sempre atualizar a lista com cada ação que é disparada seja adiconar, remover, etc...
Exiba em alguma lugar na tela as seguintes informações:

Total de colaboradores;
Qual o custo mensal pagando todos esses colaboradores(Soma de todos os salários);
A média da idade dos colaboradores;
A média dos salários dos colaboradores;
Obs: Utilize funções de alta ordem para realizar os cálculos.*/

const prompt = require("prompt-sync")({signt:true});
const colaborador = (id,nome, idade, cargo, salario, admissao) => ({
    id: id++,
    nome: nome || "não informado",
    idade: idade || "não informado",
    cargo: cargo || "não informado",
    salario: salario || "não informado",
    admissao: admissao || "não informado",

});

const pessoa = [];
let id = 1;
let nome = " ";
let idade = 0;
let cargo = " ";
let salario = 0;
let admissao = " ";
let op = 0;

function adicionar (id,nome, idade, cargo, salario, admissao){
    pessoa.push(colaborador(id,nome, idade, cargo, salario, admissao));
    
} 

function remover(id,nome){
    let posicao = pessoa.findIndex(c => c.id == id && c.nome == nome);
    pessoa.splice(posicao,1);
}

function buscar(id, nome, cargo){
    
    let busca = pessoa.find(c => c.id == id && c.nome == nome && c.cargo == cargo);
    console.log(busca);
}



do{
    
    console.log("*********************************************************\nDigite a opção desejada: \n1 - Adicionar Colaborador\n2 - Remover colaborador\n3 - Buscar Colaborador\n4 - Relatórios\n5 - Alterar Dados\n0 - sair");
    op = parseInt(prompt("Opção: "));
    
    switch(op){
        case 1:
            nome = (prompt("Digite o nome do colaborador: "));
            idade = (parseInt(prompt("Digite a idade do colaborador: ")));
            cargo = (prompt("Digite o cargo do colaborador: "));
            salario = (parseFloat(prompt("Digite o salario do colaborador: ")));
            admissao = (prompt("Digite a data de admissão: "));
            adicionar(id,nome,idade,cargo,salario,admissao);
            id++;
            console.log(pessoa);
            break;
        case 2:
            id = (prompt("Digite a id do colaborador: "));
            nome = (prompt("Digite o nome do colaborador: "));
            remover(id, nome);
            console.log(pessoa);
            break;
        case 3:
            id = (prompt("Digite a id do colaborador: "));
            nome = (prompt("Digite o nome do colaborador: "));
            cargo = (prompt("Digite o cargo do colaborador: "));
            buscar(id,nome,cargo);
            break;
        case 4:
            let total = (pessoa.length);
            let sum =0;
            let sum2 = 0; 
            console.log(`O total de colaboradores é: ${total}`);
            let custo = pessoa.map(p=>(sum += p.salario));
            console.log(`O custo mensal é: ${sum}`);
            let medid = pessoa.map(p=>(sum2 += p.idade));
            console.log(`A média de idade dos colaboradores é: ${sum2/total}`);
            console.log(`A média dos salários dos colaboradores é: ${sum/total}`);
        case 5:
            id = (prompt("Digite a id do colaborador: "));
            nome = (prompt("Digite o nome do colaborador: "));
            cargo = (prompt("Digite o cargo do colaborador: "));
            buscar(id,nome,cargo);
            console.log("")
            break;
        case 0:
            break;
    }

}while (op !== 0)