/*Uitilize o código que foi disponibilizado na aula e siga as regras de negócio da lista de exercícios.

Considere que o objeto do aluno contém as seguintes características:

Id (Único)(Number)
Nome(String)
Idade(Number)
Exercicios Adaptados(Boolean)
Professor Responsável(String)
Tem Acesso(Boolean)(Para bloquear entrada caso necessário)
Valor Mensalidade(Number)
No sistema de acadêmia, adicione as seguintes funcionalidades:

Adicionar aluno;
Remover aluno;
Ao adicionar aluno, verifique se ele precisa ter exercícios adaptados(Se idade maior que 60) e coloque true ou false para essa propriedade no objeto;
O aluno sempre terá um professor responsável, exiba em um select a lista de professores que podem ser selecionados como responsáveis e grave a informação no objeto.*/

const prompt = require("prompt-sync")({signt:true});
const aluno = (id,nome, idade, exercicios, professor, acesso, mensalidade) => ({
    id: id++,
    nome: nome || "não informado",
    idade: idade || "não informado",
    exercicios: exercicios || false,
    professor: professor || "não informado",
    acesso: acesso || true,
    mensalidade: mensalidade || "não informado"

});

const pessoa = [];
let id = 1;
let nome = " ";
let idade = 0;
let professor = 1;
let acesso;
let mensalidade = 0;
let op = 0;



function adicionar (id,nome, idade, exercicios, professor, acesso, mensalidade){
    if(idade>60) {
    pessoa.push(aluno(id,nome, idade, exercicios, professor, acesso, mensalidade));}
    else{
    pessoa.push(aluno(id,nome, idade, exercicios, professor, acesso, mensalidade))
    }
    
} 

function remover(id,nome){
    let posicao = pessoa.findIndex(c => c.id == id && c.nome == nome);
    pessoa.splice(posicao,1);
}

function buscar(id, nome, professor, idade){
    
    let busca = pessoa.find(c => c.id == id && c.nome == nome && c.professor == professor && c.idade == idade);
    console.log(busca);
}




do{
    
    console.log("*********************************************************\nDigite a opção desejada: \n1 - Adicionar aluno\n2 - Remover aluno\n3 - Buscar aluno\n4 - Relatórios\n5 - Alterar Acesso\n0 - sair");
    op = parseInt(prompt("Opção: "));
    
    switch(op){
        case 1:
            nome = (prompt("Digite o nome do aluno: "));
            idade = (parseInt(prompt("Digite a idade do aluno: ")));
            if(idade>60){
                exercicios = true;
            }
            else{
                exercicios = false;
            }
            console.log("Nossos professores disponiveis são: \n1-Pedro\n2-João\n3-Maria\n4-Ana")
            professor = (parseFloat(prompt("Escolha um professor para o aluno: ")));
            mensalidade = (parseFloat(prompt("Digite o valor da mensalidade: ")));
            acesso = (prompt("Liberar acesso ao aluno? 1-Sim / 0-Não:"));
            if(acesso){
                acesso = true;
            }
            else{
                acesso = false;
            }
            adicionar(id,nome, idade, exercicios, professor, acesso, mensalidade)
            id++;
            console.log(pessoa);
            break;
        case 2:
            id = (prompt("Digite a id do aluno: "));
            nome = (prompt("Digite o nome do aluno: "));
            remover(id, nome);
            console.log(pessoa);
            break;
        case 3:
            id = (prompt("Digite a id do aluno: "));
            nome = (prompt("Digite o nome do aluno: "));
            professor = (prompt("Digite o codigo do professor do aluno: "));
            idade = (prompt("Digite a idade do aluno: "));
            buscar(id, nome, professor, idade);
            break;
        case 4:
            let total = (pessoa.length);
            console.log(`O total de alunos é: ${total}`);
            let lucro = pessoa.reduce((soma2, item)=> soma2 + item.mensalidade, 0);
            console.log(`O total de mensalidades é: ${lucro}`);
            let idad = pessoa.reduce((soma, item)=> soma + item.idade, 0);
            console.log(`A média de idade dos alunos é: ${idad/total}`);
            console.log(`A média das mensalidades dos alunos é: ${lucro/total}`);
            break;
        case 5:
            id = (prompt("Digite a id do aluno: "));
            nome = (prompt("Digite o nome do aluno: "));
            acesso = (prompt("Liberar acesso ao aluno? 1-Sim / 0-Não:"));
            let alteraluno = pessoa.find(p => p.id == id && p.nome == nome);
            alteraluno.acesso = acesso;
            console.log(alteraluno);            
            break;
        case 0:
            break;
    }

}while (op !== 0)