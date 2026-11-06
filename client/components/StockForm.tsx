import type { ChangeEventHandler, FormEventHandler } from 'react'

import Btn from '../atoms/Btn'

interface StockFormProps {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  onSubmit: FormEventHandler<HTMLFormElement>
}

const StockForm = ({ value, onChange, onSubmit }: StockFormProps) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='symbol'
          aria-label='Stock symbol'
          placeholder='Symbol (e.g. AAPL)'
          onChange={onChange}
          value={value}
        />
        <Btn text='Search' />
      </form>
    </div>
  )
}

export default StockForm
