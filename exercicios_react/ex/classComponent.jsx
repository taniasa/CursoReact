import React, { Component } from 'react'

export default class ClassComponent extends Component {
    render() {
        return (
            //Aqui o props é da herança tem q ser props
            <h1>{this.props.value}</h1>
        )
    }
}