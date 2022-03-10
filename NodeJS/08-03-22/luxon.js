const { DateTime } = require('luxon');

const datadehoje = DateTime.now();

// Atividade1: Criar e imprimir o dia de ontem.
const datadeontem = (datadehoje.plus({day: -1}));

console.log(`O dia de ONTEM foi: ${datadeontem.setLocale('pt-BR')
  .toLocaleString(DateTime.DATE_SHORT)}\n\n`);


// Atividade2: Criar o dia 5 do mês de Julho deste ano às 15h usando o método fromObject.
const cincojulhoesseano = (
  DateTime.fromObject(
      { day: 5, month: 7, year: 2022, hour: 15 },
      { zone: 'America/Sao_Paulo' },
    )
);

console.log(`Data criada utilizando o FromObject : ${cincojulhoesseano.setLocale('pt-BR')
.toLocaleString(DateTime.DATE_SHORT)}\n\n`);


// Atividade3: Imprimir, em alemão, o dia da semana da data 15 dias antes da véspera de natal de 1980.
const vesperanatal = (
  DateTime.fromObject(
      { day: 24, month: 12, year: 1980 },
      { zone: 'Europe/Berlin' },
    )
);

const quinzediasantes = (vesperanatal.plus({day: -15}));
console.log(`A véspera do Natal de 1980 foi ${vesperanatal.toLocaleString({weekday: 'long'})}, 
    quinze dias antes foi uma ${quinzediasantes.toLocaleString(DateTime.DATE_HUGE)}, 
    ou como dizem por lá ${quinzediasantes.setLocale('de-de').toLocaleString(DateTime.DATE_HUGE)}. 
    \n`
);
