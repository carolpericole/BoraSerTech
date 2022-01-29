
const prompt = require("prompt-sync")({signt:true});
let soma = 0;
let res = 0;
function validacpf(cpf) {
  if (cpf == "00000000000"){ 
      return console.log("CPF inválido");
  }

  for (i=1; i<=9; i++) {
      soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
  }
    
    res = (soma * 10) % 11;

    if ((res == 10) || (res == 11)){
        res = 0;
    }
    if (res != parseInt(cpf.substring(9, 10))) {
        return console.log("CPF inválido");;
    }

    soma = 0;
        for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    }
    res = (soma * 10) % 11;

    if ((res == 10) || (res == 11)) { 
        res = 0;
    }
    if (res != parseInt(cpf.substring(10, 11) ) ) {
        return console.log("CPF inválido");;
    }
    return console.log("CPF válido");;
}

const cpf = (prompt("Digite o numero do CPF: "));
console.log(validacpf(cpf));