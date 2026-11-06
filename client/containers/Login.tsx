import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

import LoginForm from '../components/LoginForm'
import styles from '../styles/containers/Page.module.css'

const Login = () => {
  const [form, setForm] = useState<Record<string, string>>({
    username: '',
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
        <h1 className={styles.title}>Welcome back</h1>
        <p className={styles.subtitle}>Sign in to your paper-trading account.</p>
      </header>
      <div className={styles.card}>
        <LoginForm onSubmit={handleSubmit} onChange={handleInputChange} />
      </div>
      <p className={styles.footer}>
        New here?
        <Link to='/signup'>Create an account</Link>
      </p>
    </div>
  )
}

export default Login
