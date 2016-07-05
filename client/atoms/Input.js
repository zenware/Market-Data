import React from 'react'
import CSSModules from 'react-css-modules'

const Input = (props) => {
    return (
        <input type={props.type} styleName={props.style || 'root'}
            onChange={props.onChange} placeholder={props.placeholder}
            value={props.value} />
    )
}

export default Input
