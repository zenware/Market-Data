import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

import SignUpForm from '../components/SignUpForm'
import styles from '../styles/containers/Page.module.css'

const SignUp = () => {
  const [form, setForm] = useState<Record<string, string>>({
    username: '',
    email: '',
    password: ''
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1 className={styles.title}>Create your account</h1>
        <p className={styles.subtitle}>Start building paper portfolios in seconds.</p>
      </header>
      <div className={styles.card}>
        <SignUpForm onSubmit={handleSubmit} onChange={handleInputChange} />
      </div>
      <p className={styles.footer}>
        Already have an account?
        <Link to='/login'>Log In</Link>
      </p>
    </div>
  )
}

export default SignUp
