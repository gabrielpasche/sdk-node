# sdk-node

```
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
const response = await widePay.api('/recebimentos/cobrancas/adicionar', options)
console.log('WP Response', response);
```
