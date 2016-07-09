import React from 'react'

import NavItem from '../atoms/NavItem'

const NavBar = (props) => {
    return (
        <div>
            <NavItem to='/' itemName='Home' />
            <NavItem to='/dashboard' itemName='Dashboard' />
            <NavItem to='/login' itemName='Login' />
            <NavItem to='/signup' itemName='Sign Up' />
        </div>
    )
}

export default NavBar
