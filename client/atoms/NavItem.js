import React from 'react'
import { Link } from 'react-router'

const NavItem = (props) => {
    return (
        <Link to={props.to}>{ props.itemName }</Link>
    )
}

export default NavItem
