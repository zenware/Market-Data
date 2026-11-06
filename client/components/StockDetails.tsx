import type { StockQuote } from '../../shared/api'

interface StockDetailsProps {
  quote: StockQuote
}

const StockDetails = ({ quote }: StockDetailsProps) => {
  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: quote.currency
  }).format(quote.price)
  const change = `${quote.change >= 0 ? '+' : ''}${quote.change.toFixed(2)} (${quote.changePercent.toFixed(2)}%)`

  return (
    <div>
      <h2>{quote.symbol}</h2>
      <p>{quote.name}</p>
      <p>{price}</p>
      <p>{change}</p>
    </div>
  )
}

export default StockDetails
