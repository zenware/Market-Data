import type { FormEventHandler, ReactNode } from 'react'

interface FormProps {
  children: ReactNode
  onSubmit?: FormEventHandler<HTMLFormElement>
  className?: string
}

const Form = ({ children, onSubmit, className }: FormProps) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default Form
