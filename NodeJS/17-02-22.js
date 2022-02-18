const fs = require('fs');
const path = require('path');

// OPÇÃO 1 readFile - Assíncrono
// No método fs.readFile(), podemos ler um arquivo de maneira assíncrona sem bloqueio

const filePath = path.join(__dirname, 'file.txt');
fs.readFile(filePath, 'utf-8', (err, data) => {
  console.log('\nRetorno do readFile: ', data);
});

// OPÇÃO 2 readFileSync - Sincrono
// no método fs.readFileSync(), podemos ler arquivos de maneira síncrona, ou seja,
// estamos dizendo ao node.js para bloquear outros arquivos paralelos.

const data = fs.readFileSync(filePath, 'utf-8');
console.log('\nRetorno do readFileSync: ', data);

// OPÇÃO 3 promises.readFile - Assíncrono
// Basicamente, uma vez que uma promise é chamada, ela inicia em pending state (pendente).
// Isto significa que a função caller (que chamou a promise) continua sua execução enquanto
// espera pela promise terminar seu próprio processamento e retornar ao caller com algum feedback.

function cumprimenta(nome) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`\nOlá, ${nome}`);
    }, 2000);
  });
}

cumprimenta('Carol').then((res) => { console.log(res); });

// fs.promises.readFile(filePath, 'utf-8').then((res) => { console.log(res); });

// READDIR
// O método fs.readdir() é usado para ler de forma assíncrona o conteúdo de um determinate diretório

const dirPath = 'D:/#BORASERTECH/ModuloIV-NodeJS';
const dir = fs.promises.readdir(dirPath);

dir.then((files) => files.map((file) => path.join(dirPath, file))).then(console.log);
