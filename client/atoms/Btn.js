import React from 'react'
import CSSModules from 'react-css-modules'

const Btn = (props) => {
    return (
        <button onClick={props.onClick}>
            { props.text }
        </button>
    )
}

export default Btn
