import React from 'react'

const Form = (props) => {
    return (
        <form styleName={props.style || 'root'} onSubmit={props.onSubmit}>
            { props.children }
        </form>
    )
}

export default Form
