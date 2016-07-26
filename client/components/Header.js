import React from 'react'
import CSSModules from 'react-css-modules'

import Style from '../styles/components/Header'

const Header = (props) => {
    return (
        <div styleName='root'>
            HEADER
        </div>
    )
}

export default CSSModules(Header, Style)
