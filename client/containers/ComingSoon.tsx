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
      <div className={styles.container}>
        <div className={styles.avatar} />
        <div className={styles['text-container']}>
          <h1 className={styles.header}>In Construction...</h1>
          <p className={styles.description}>(coming soon)</p>
        </div>
      </div>
      <NewsLetterForm onSubmit={handleSubmit} onChange={handleInputChange} />
    </div>
  )
}

export default ComingSoon
