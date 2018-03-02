import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1, 
            description: 'Pagar fatura do cartão',
            done: true
        }, {
            _id: 2, 
            description: 'Pagar fatura do cartão 2 ',
            done: false
        }, {
            _id: 3, 
            description: 'Pagar fatura do cartão 3',
            done: false
        }]
    })
})

export default rootReducer