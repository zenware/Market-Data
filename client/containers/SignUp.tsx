import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

import SignUpForm from '../components/SignUpForm'

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
    <div>
      <SignUpForm onSubmit={handleSubmit} onChange={handleInputChange} />
      <span>
        Already have an account?
        <Link to='/login'>Log In</Link>
      </span>
    </div>
  )
}

export default SignUp
