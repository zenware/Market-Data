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
        <Input type='text' name='name' onChange={onChange} />
        <Input type='email' name='email' onChange={onChange} />
        <Btn text='Click Me' />
      </form>
    </div>
  )
}

export default NewsLetterForm
