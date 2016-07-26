import React from 'react'
import CSSModules from 'react-css-modules'

import NavItem from '../atoms/NavItem'

import Style from '../styles/components/NavBar'

const NavBar = (props) => {
    return (
        <div styleName='root'>
            <NavItem to='/' itemName='Home' />
            <NavItem to='/dashboard' itemName='Dashboard' />
            <NavItem to='/login' itemName='Login' />
            <NavItem to='/signup' itemName='Sign Up' />
            <NavItem to='/landing' itemName='Coming Soon' />
        </div>
    )
}

export default CSSModules(NavBar, Style)
