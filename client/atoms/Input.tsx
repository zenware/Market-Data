import type { ChangeEventHandler } from 'react'

interface InputProps {
  type: string
  name: string
  value?: string
  placeholder?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  className?: string
}

const Input = ({ type, name, value, placeholder, onChange, className }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  )
}

export default Input
