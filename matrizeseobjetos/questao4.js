//Considere o seguinte objeto abaixo:

const venda = {
    produto: "ventilador",
    marca: "Arno",
    loja: "Amazon",
    quantidade: 5,
    preco: 500,
    hasDesconto: () => (venda.preco > 450) ? "Sem desconto" : "" ,
    calcularValorFinal: () => (venda.hasDesconto()) ? (venda.preco - (venda.preco * 0.1)) : venda.preco,
}



console.log(`[${venda.loja}] - [${venda.produto} ${venda.marca}] - [${venda.quantidade}] - [Valor total da venda = ${venda.calcularValorFinal()}]`);