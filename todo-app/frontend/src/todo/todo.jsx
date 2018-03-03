import React from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

// Mudando o componente para funcional ao invés de classe
export default props => (
    <div>
        <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
        <TodoForm />
        <TodoList />
    </div>
)
// export default class Todo extends Component {
//     render() {
//         return (
//             <div>
//                 <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
//                 <TodoForm />
//                 <TodoList />
//             </div>
//         )
//     }
// }