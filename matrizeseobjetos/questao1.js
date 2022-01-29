/*Considere a matriz a seguir:

const alunos = [
    ["João", 30, "Python", "Data Science"],
    ["Letícia", 23, "Javascript", "Web Full Stack - Frontend"],
    ["Pedro", 40, "Java", "Mobile"],
    ["Luciana", 25, "C#", "Web Full Stack - Backend"]
]
Essa matriz representa os dados de 4 alunos. Os dados são: nome, idade, linguagem de programação que está aprendendo e curso que está fazendo na Let's Code.



Mostre no console a idade da aluna Letícia.

*/

const alunos = [
    ["João", 30, "Python", "Data Science"],
    ["Letícia", 23, "Javascript", "Web Full Stack - Frontend"],
    ["Pedro", 40, "Java", "Mobile"],
    ["Luciana", 25, "C#", "Web Full Stack - Backend"]
]

//Mostre no console todos os dados da aluna Luciana.
for(let i = 0; i<4; i++){
    console.log(alunos[3][i]);
}


//Mostre no console a idade da aluna Letícia.
console.log("\n\nA idade da aluna Leticia é: " + (alunos[1][1]));

//Modifique o curso do aluno Pedro de Mobile para Data Science.
console.log("\n\nO curso do Pedro é: " + (alunos[2][3]));

const response = alunos.splice(2,1,["Pedro", 40, "Java", "Data Science"]); 

console.log("\n\nO NOVO curso do Pedro é: " + (alunos[2][3]));


