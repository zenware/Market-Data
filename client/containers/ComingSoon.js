import React from 'react'
import CSSModules from 'react-css-modules'

import Style from '../styles/containers/ComingSoon'

const ComingSoon = (props) => {
    return (
        <div styleName='root'>
            <div styleName='container'>
                <div styleName='avatar' draggable={false} />
                <div styleName='text-container'>
                    <h1 styleName='header'>In Construction...</h1>
                    <p styleName='description'>(coming soon)</p>
                </div>
            </div>
        </div>
    )
}

export default CSSModules(ComingSoon, Style)
