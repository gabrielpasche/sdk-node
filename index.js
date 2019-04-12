const WidePay = require('./WidePay')

const options = {
    forma: 'Cartão,Boleto',
    cliente: 'Lívia Pontarolo Almeida',
    pessoa: 'Física',
    cpf: '463.384.662-02',
    vencimento: '13/04/2019',
    itens: [
        {descricao: 'Descrição item 1', valor: 22.55}
    ]
};
const widePay = new WidePay('200267', '00b1aa0f124b6ea635081fc01c8228cf');

widePay.api('/recebimentos/cobrancas/adicionar', options)
    .then(response =>{
        console.log('WP Response', response)
    }).catch(error=>{
        console.log('WP Response error', error)
    })

// OU usando [await]

try {
    const response = await widePay.api('/recebimentos/cobrancas/adicionar', options)
    console.log('WP Response', response)
} catch (e) {
    console.log(e)
}
