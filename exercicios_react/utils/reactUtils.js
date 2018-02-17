import React from 'react'

function childrenWithProps(children, props) {
   return React.Children.map(props.children,
        //Callback child
        child => React.cloneElement(child, {...props}))
}

export { childrenWithProps }