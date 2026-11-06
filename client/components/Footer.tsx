import styles from '../styles/components/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.inner}>© {new Date().getFullYear()} Market Data</div>
    </footer>
  )
}

export default Footer
