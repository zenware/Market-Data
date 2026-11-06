import type { FormEventHandler, ReactNode } from 'react'

import styles from './Form.module.css'

interface FormProps {
  children: ReactNode
  onSubmit?: FormEventHandler<HTMLFormElement>
  className?: string
}

const Form = ({ children, onSubmit, className }: FormProps) => {
  const classes = [styles.root, className].filter(Boolean).join(' ')

  return (
    <form className={classes} onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default Form
