//Utilize o método filter para determinar quais restaurantes estão abertos no horário atual.

const restaurantes = [
  {
    nome: 'Pizzaria do Mario',
    horario_abertura: 14,
    horario_fechamento: 23
  },
  {
    nome: 'Churrascaria do Ronaldo',
    horario_abertura: 11,
    horario_fechamento: 14,
  },
  {
    nome: 'Bar do Zeca',
    horario_abertura: 12,
    horario_fechamento: 2,
  },
  {
    nome: 'Doceria da Mara',
    horario_abertura: 8,
    horario_fechamento: 20,
  },
];

const horaatual = new Date().getHours();
//const diaatual = new Date().getDate();
//console.log(diaatual);
const validacao = res => {
  if((horaatual >= res.horario_abertura) && (horaatual < res.horario_fechamento)) 
    return res;
  else if(res.horario_fechamento < res.horario_abertura) 
    return res;
    else return null;
}

const result = restaurantes.filter(validacao);

console.log (result);