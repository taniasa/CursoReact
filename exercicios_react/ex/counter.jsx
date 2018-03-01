import React from 'react'
import { bindActionCreators } from 'redux'
import {connect } from 'react-redux'
import {inc, dec, stepChanged } from './counterActions'

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>
        <input onChange={props.stepChanged}
            value={props.counter.step} type='number' />
        <button onClick={props.dec}>Dec</button>    
        <button onClick={props.inc}>Inc</button>    
    </div>
)

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = 
    dispatch => bindActionCreators({
        inc,
        dec, 
        stepChanged
    }, dispatch)
//Este connect é uma função que retorna uma função e é chamada com o parâmetro Counter
export default connect(mapStateToProps, mapDispatchToProps)(Counter)