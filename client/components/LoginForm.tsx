import type { ChangeEventHandler, FormEventHandler } from 'react'

import Form from '../atoms/Form'
import Input from '../atoms/Input'
import Btn from '../atoms/Btn'

interface LoginFormProps {
  onSubmit: FormEventHandler<HTMLFormElement>
  onChange: ChangeEventHandler<HTMLInputElement>
}

const LoginForm = ({ onSubmit, onChange }: LoginFormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type='text' placeholder='Username' name='username' onChange={onChange} />
      <Input type='password' placeholder='Password' name='password' onChange={onChange} />
      <Btn text='Log In' />
    </Form>
  )
}

export default LoginForm
