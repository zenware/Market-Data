import { NavLink } from 'react-router-dom'

import styles from '../styles/atoms/NavItem.module.css'

interface NavItemProps {
  to: string
  itemName: string
}

const NavItem = ({ to, itemName }: NavItemProps) => {
  return (
    <NavLink
      end={to === '/'}
      className={({ isActive }) => (isActive ? `${styles.root} ${styles.active}` : styles.root)}
      to={to}
    >
      {itemName}
    </NavLink>
  )
}

export default NavItem
