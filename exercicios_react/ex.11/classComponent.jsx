import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { value: props.initialValue }
    }

    sum(delta) {
        //O estado não é mexido e sim evoluido, mantem o estado original
        this.setState({ value: this.state.value + delta})    
    }

    render() {
        return (
            <div>
                //Aqui o props é da herança tem q ser props
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(-1)}>Dec</button>
                <button onClick={() => this.sum(1)}>Inc</button>
            </div>
        )
    }
}