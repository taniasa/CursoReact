import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
    <div>
        <h1>Família</h1>
        { childrenWithProps(props.children, props) }
        {/* { React.Children.map(props.children,
            //Callback child
            child => React.cloneElement(child, {...props})) }  */}
    </div>
)