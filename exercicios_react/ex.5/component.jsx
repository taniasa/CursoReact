import React from 'react'

export const Segundo = props => <h1>Segundo Componente!</h1>

//Exportacao default, ele retorna(para onde esta sendo utilizado) o primeiro componente encontrado no arquivo
export default props => (
    <h1>Primeiro componente!</h1> 
)


//Se deixar isso não precisa do export const por exemplo
//export { Primeiro, Segundo}