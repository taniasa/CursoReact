import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='SA'>
        <Member name='Tânia' />
        <Member name='Ricardo' />
        <Member name='Flávio' />
        <Member name='Davi' />
    </Family>
, document.getElementById('app'))
