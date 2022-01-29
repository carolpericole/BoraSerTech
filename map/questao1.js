/*Durante a Black Friday uma loja declarou descontos em produtos do seu catálogo, de acordo com a regra abaixo:

5% para produtos abaixo de R$ 200,00

10% para produtos abaixo de R$ 400,00

15% para produtos abaixo de R$ 2000,00

20% para produtos acima de R$ 2000,00

Com base nisso, crie um programa que recebe o preço normal dos 10 produtos mais adquiridos pelos clientes e guarde-os em um array.

Em seguida, utilize a função map para aplicar o desconto nos preços e, com isso, criar um array com o preço após os descontos.*/

const prompt = require("prompt-sync")({signt:true});
let arr =[];
for(let i = 0; i<10; i++){
    let valor = (parseFloat(prompt("Digite o preço normal do "+ (i+1) +"º item mais vendido: ")));
    arr.push(valor);
}

console.log("Array criado: "+arr);

const arr2 = arr.map( x => {
    if (x<200) return x -= (x*0.05);
    if (x>=200 && x<400) return x -= (x*0.1);
    if (x>=400 && x<2000)return x -= (x*0.15);
    if (x>=2000) return x-= (x*0.2);
  
}
)

console.log("Array com desconto: "+arr2);