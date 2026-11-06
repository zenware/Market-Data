import { Link } from 'react-router-dom'

import styles from '../styles/components/NavBar.module.css'

import NavItem from '../atoms/NavItem'

const NavBar = () => {
  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <Link className={styles.brand} to='/'>
          <span className={styles.mark} aria-hidden='true'>
            MD
          </span>
          Market Data
        </Link>
        <nav className={styles.nav} aria-label='Primary'>
          <NavItem to='/' itemName='Markets' />
          <NavItem to='/landing' itemName='Coming Soon' />
          <NavItem to='/login' itemName='Login' />
          <NavItem to='/signup' itemName='Sign Up' />
        </nav>
      </div>
    </header>
  )
}

export default NavBar
