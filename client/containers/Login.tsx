import { useState, type ChangeEvent, type FormEvent } from 'react'

import LoginForm from '../components/LoginForm'

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
    <div>
      <LoginForm onSubmit={handleSubmit} onChange={handleInputChange} />
    </div>
  )
}

export default Login
