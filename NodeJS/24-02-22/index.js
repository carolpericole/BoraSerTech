/* Criar 3 arquivos .txt e inserir algum conteúdo neles
Ler os 3 ao mesmo tempo e imprimir o resultado quando todos retornarem
Ler os 3 ao mesmo tempo e imprimir o resultado assim que a primeira 
Promise resolver
*/
const fsPromise = require('fs').promises;
const path = require('path');

(async () => {
  const folderPath = path.join(__dirname);
  const allFiles = await fsPromise.readdir(folderPath);
  /*
    allFiles = [
      '.cache',
      '.replit',
      '.upm',
      'texto1.txt',
      'texto2.txt',
      'texto3.txt',
      'index.js',
      'replit.nix'
    ]
  */
// Filta os arquivos que terminam com txt

  const txtFiles = allFiles.filter(file => file.endsWith('.txt'));
  const readPromises = txtFiles.map(txtFile => {
    const filePath = path.join(__dirname, txtFile);
    return fsPromise.readFile(filePath, 'utf-8');
  });

  const contents = await Promise.all(readPromises);
  console.log(
    'all content:\n',
    contents.join('\n'),
    '\n--------------\n'
);
  const firstToResolve = await Promise.race(readPromises);
  console.log(`first to resolve was: ${firstToResolve}`);

  fsPromise.writeFile('hino.txt', contents, (err) => {
    if (err) throw err;
    console.log('O arquivo foi criado!');
  });
})();