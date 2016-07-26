import React from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'

import Style from '../styles/atoms/NavItem'

const NavItem = (props) => {
    return (
        <Link styleName='root' to={props.to}>{ props.itemName }</Link>
    )
}

export default CSSModules(NavItem, Style)
