import type { ChangeEventHandler, FormEventHandler } from 'react'

import Form from '../atoms/Form'
import Input from '../atoms/Input'
import Btn from '../atoms/Btn'

interface SignUpFormProps {
  onSubmit: FormEventHandler<HTMLFormElement>
  onChange: ChangeEventHandler<HTMLInputElement>
}

const SignUpForm = ({ onSubmit, onChange }: SignUpFormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type='text' placeholder='Username' name='username' onChange={onChange} />
      <Input type='email' placeholder='Email' name='email' onChange={onChange} />
      <Input type='password' placeholder='Password' name='password' onChange={onChange} />
      <Btn text='Sign Up' />
    </Form>
  )
}

export default SignUpForm
