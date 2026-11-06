import type { ChangeEventHandler, FormEventHandler } from 'react'

import Btn from '../atoms/Btn'
import styles from './StockForm.module.css'

interface StockFormProps {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  onSubmit: FormEventHandler<HTMLFormElement>
}

const StockForm = ({ value, onChange, onSubmit }: StockFormProps) => {
  return (
    <div>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          className={styles.input}
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
