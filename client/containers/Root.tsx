import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import styles from './Root.module.css'

const Root = () => {
  return (
    <div className={styles.app}>
      <NavBar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Root
