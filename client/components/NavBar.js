import React from 'react'

import NavItem from './common/NavItem'

const NavBar = (props) => {
    return (
        <div>
            <NavItem to='/' itemName='Home' />
            <NavItem to='/dash' itemName='Dashboard' />
            <NavItem to='/login' itemName='Login' />
            <NavItem to='/register' itemName='Sign Up' />
        </div>
    )
}

export default NavBar
