import React from 'react'
import CSSModules from 'react-css-modules'

import Style from '../styles/atoms/Input'

const Input = (props) => {
    return (
        <input type={props.type} styleName={props.style || 'root'}
            onChange={props.onChange} placeholder={props.placeholder}
            value={props.value} name={props.name} />
    )
}

export default Input
