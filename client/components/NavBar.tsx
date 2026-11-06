import styles from '../styles/components/NavBar.module.css'

import NavItem from '../atoms/NavItem'

const NavBar = () => {
  return (
    <div className={styles.root}>
      <NavItem to='/' itemName='Markets' />
      <NavItem to='/landing' itemName='Coming Soon' />
      <NavItem to='/login' itemName='Login' />
      <NavItem to='/signup' itemName='Sign Up' />
    </div>
  )
}

export default NavBar
