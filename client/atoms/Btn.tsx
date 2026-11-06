import type { MouseEventHandler } from 'react'

interface BtnProps {
  text: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Btn = ({ text, onClick }: BtnProps) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

export default Btn
