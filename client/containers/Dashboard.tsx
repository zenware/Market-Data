import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'

import { getRates } from '../actions/currencyActions'
import { getStockQuote } from '../actions/stockActions'
import CurrencyData from '../components/CurrencyData'
import StockDetails from '../components/StockDetails'
import StockForm from '../components/StockForm'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  const dispatch = useAppDispatch()
  const stock = useAppSelector(state => state.stock)
  const currency = useAppSelector(state => state.currency)
  const [symbol, setSymbol] = useState('')

  useEffect(() => {
    dispatch(getStockQuote('AAPL'))
    dispatch(getRates('USD'))
  }, [dispatch])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSymbol(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextSymbol = symbol.trim().toUpperCase()
    if (!nextSymbol) {
      return
    }

    dispatch(getStockQuote(nextSymbol))
    setSymbol('')
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>Market overview</h1>
          <span className={styles.badge}>
            <span className={styles.dot} />
            Live data
          </span>
        </div>
        <p className={styles.subtitle}>
          Live equity quotes and foreign exchange rates for your paper-trading workspace.
        </p>
      </header>

      <div className={styles.grid}>
        <section className={styles.card} aria-labelledby='stock-heading'>
          <div className={styles.cardHeader}>
            <h2 className={styles.sectionTitle} id='stock-heading'>
              Stock Data
            </h2>
            <span className={styles.cardHint}>Search any ticker</span>
          </div>
          <StockForm value={symbol} onChange={handleChange} onSubmit={handleSubmit} />
          {stock.loading && !stock.quote && <p className={styles.loading}>Loading quote…</p>}
          {stock.error && (
            <p className={styles.error} role='alert'>
              {stock.error}
            </p>
          )}
          {stock.quote && <StockDetails quote={stock.quote} />}
        </section>

        <section className={styles.card} aria-labelledby='currency-heading'>
          <div className={styles.cardHeader}>
            <h2 className={styles.sectionTitle} id='currency-heading'>
              Currency Data
            </h2>
            <span className={styles.cardHint}>
              {currency.rates ? `${currency.rates.base} base` : 'Latest rates'}
            </span>
          </div>
          {currency.loading && !currency.rates && <p className={styles.loading}>Loading rates…</p>}
          {currency.rates && <CurrencyData data={currency.rates} />}
          {currency.error && (
            <p className={styles.error} role='alert'>
              {currency.error}
            </p>
          )}
        </section>
      </div>
    </div>
  )
}

export default Dashboard
