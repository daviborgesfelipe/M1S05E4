/*class define a estrutura*/
class Pedidos {
    numeroPedido;
    dataPedido;
    estaPago;
    listaProdutos;
    nomeCliente;


    constructor(numeroPedido, dataPedido, estaPago, quantidade, nomeCliente){
        this.numeroPedido = numeroPedido;
        this.dataPedido = dataPedido;
        this.estaPago = estaPago;
        this.listaProdutos = listaProdutos;
        this.nomeCliente = nomeCliente;
    }
}

let data_atual = new Date().toLocaleDateString();
let listaProdutos = [];

/*apartir new que é criado um objeto concreto apartir da class Pedidos */
const pedido = new Pedidos (13, data_atual, false, listaProdutos, "Davi Borges" );


console.log(pedido)



// function veiculo() {
//     return {
//     nome,
//     preco,
//     emEstoque,
//     quantidade,

//     buzinar: () => {},
//     }
// }