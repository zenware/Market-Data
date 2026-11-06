import type { ChangeEventHandler, FormEventHandler } from 'react'

import styles from '../styles/components/NewsLetterForm.module.css'

import Btn from '../atoms/Btn'
import Input from '../atoms/Input'

interface NewsLetterFormProps {
  onSubmit: FormEventHandler<HTMLFormElement>
  onChange: ChangeEventHandler<HTMLInputElement>
}

const NewsLetterForm = ({ onSubmit, onChange }: NewsLetterFormProps) => {
  return (
    <div className={styles.root}>
      <form onSubmit={onSubmit}>
        <Input type='text' name='name' placeholder='Your name' onChange={onChange} />
        <Input type='email' name='email' placeholder='Email address' onChange={onChange} />
        <Btn text='Notify me' />
      </form>
    </div>
  )
}

export default NewsLetterForm
