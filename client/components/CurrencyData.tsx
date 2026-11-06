import type { CurrencyRates } from '../../shared/api'
import styles from './CurrencyData.module.css'

interface CurrencyDataProps {
  data: CurrencyRates
}

const CODES = ['EUR', 'GBP', 'JPY'] as const

const CurrencyData = ({ data }: CurrencyDataProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.meta}>
        <span>
          Base <strong>{data.base}</strong>
        </span>
        <span>{data.date}</span>
      </div>
      <dl className={styles.rates}>
        {CODES.map(code => (
          <div className={styles.rate} key={code}>
            <dt className={styles.code}>{code}</dt>
            <dd className={styles.value}>{data.rates[code].toFixed(4)}</dd>
          </div>
        ))}
      </dl>
      <p className={styles.source}>Rates via Frankfurter</p>
    </div>
  )
}

export default CurrencyData
