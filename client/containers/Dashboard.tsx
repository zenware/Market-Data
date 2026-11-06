import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'

import { getRates } from '../actions/currencyActions'
import { getStockQuote } from '../actions/stockActions'
import CurrencyData from '../components/CurrencyData'
import StockDetails from '../components/StockDetails'
import StockForm from '../components/StockForm'
import { useAppDispatch, useAppSelector } from '../store/hooks'

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
    <main>
      <h1>Market Data</h1>

      <h2>Stock Data</h2>
      <StockForm value={symbol} onChange={handleChange} onSubmit={handleSubmit} />
      {stock.error && <p role='alert'>{stock.error}</p>}
      {stock.quote && <StockDetails quote={stock.quote} />}

      <h2>Currency Data</h2>
      {currency.rates && <CurrencyData data={currency.rates} />}
      {currency.error && <p role='alert'>{currency.error}</p>}
    </main>
  )
}

export default Dashboard
