const cachorro = (nome,apelido, raca, idade,isVacinado) => ({
    nome: nome || "Não informado",
    apelido: apelido || "Não informado",
    raca : raca || "SRD",
    idade: idade || "Não informado",
    isVacinado : isVacinado || "Não informado",


});


const meucachorro = cachorro("Sirius",null,null, "1 ano e meio", "Vacinado");
console.log(meucachorro);