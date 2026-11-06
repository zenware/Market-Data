import type { StockQuote } from '../../shared/api'
import styles from './StockDetails.module.css'

interface StockDetailsProps {
  quote: StockQuote
}

const StockDetails = ({ quote }: StockDetailsProps) => {
  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: quote.currency
  }).format(quote.price)
  const change = `${quote.change >= 0 ? '+' : ''}${quote.change.toFixed(2)} (${quote.changePercent.toFixed(2)}%)`
  const asOf = new Date(quote.asOf).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
  })
  const changeClass = quote.change >= 0 ? styles.positive : styles.negative

  return (
    <div className={styles.root}>
      <div className={styles.symbolRow}>
        <h2 className={styles.symbol}>{quote.symbol}</h2>
        <span className={styles.name}>{quote.name}</span>
      </div>
      <p className={styles.price}>{price}</p>
      <p className={`${styles.change} ${changeClass}`}>{change}</p>
      <p className={styles.meta}>As of {asOf}</p>
    </div>
  )
}

export default StockDetails
