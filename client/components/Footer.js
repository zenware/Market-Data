import React from 'react'
import CSSModules from 'react-css-modules'

import Style from '../styles/components/Footer'

const Footer = (props) => {
    return (
        <div styleName='root'>
            © Copyright 2016
            <a href='http://radiux.io/'> Radiux </a>
            All Rights Reserved
        </div>
    )
}

export default CSSModules(Footer, Style)
