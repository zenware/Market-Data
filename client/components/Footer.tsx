import styles from '../styles/components/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.inner}>
        © Copyright 2016
        <a href='http://radiux.io/'> Radiux </a>
        All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
