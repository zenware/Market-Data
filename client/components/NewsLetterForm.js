import React from 'react'
import CSSModules from 'react-css-modules'

import Btn from '../atoms/Btn'
import Input from '../atoms/Input'

import Style from '../styles/components/NewsLetterForm'

const NewsLetterForm = (props) => {
    return (
        <div styleName='root'>
            <form onSubmit={props.onSubmit}>
                <Input type='text' name='name' onChange={props.onChange} />
                <Input type='email' name='email' onChange={props.onChange} />
                <Btn text='Click Me' />
            </form>
        </div>
    )
}

export default CSSModules(NewsLetterForm, Style)
