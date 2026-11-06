import { Link } from 'react-router-dom'

import styles from '../styles/atoms/NavItem.module.css'

interface NavItemProps {
  to: string
  itemName: string
}

const NavItem = ({ to, itemName }: NavItemProps) => {
  return (
    <Link className={styles.root} to={to}>
      {itemName}
    </Link>
  )
}

export default NavItem
