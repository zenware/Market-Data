import { useState, type ChangeEvent, type FormEvent } from 'react'

import NewsLetterForm from '../components/NewsLetterForm'
import styles from '../styles/containers/ComingSoon.module.css'

const ComingSoon = () => {
  const [form, setForm] = useState<Record<string, string>>({
    name: '',
    email: ''
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <span className={styles.badge}>Coming soon</span>
        <h1 className={styles.title}>Portfolios &amp; trading</h1>
        <p className={styles.description}>
          Track positions, manage portfolios, and paper-trade stocks right here. Leave your email
          and we’ll let you know when it lands.
        </p>
        <NewsLetterForm onSubmit={handleSubmit} onChange={handleInputChange} />
      </div>
    </div>
  )
}

export default ComingSoon
