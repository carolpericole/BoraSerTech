const aes256 = require('aes256');

const senha = 'letscode2022';
const mensagem1 = 'Bora Node.js';

const mensagemCriptografada = aes256.encrypt(senha, mensagem1);
// RwVRis0ZDmUM8w9M98f/LCEwpvI3MNUYv4O9FeOoTqW1CFyWgQLkjNDMQKM=

const mensagemDescriptografada = (
  aes256.decrypt(
    senha,
    'SLSNLsMKtcBRhq2Ppyu4TYDxtVk2nZ4hQq7CMsRFbMamJQSGK4NBwA==',
  )
);
console.log(mensagemCriptografada);
console.log(mensagemDescriptografada);
