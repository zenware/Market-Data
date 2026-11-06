import type { CurrencyRates } from '../../shared/api'

interface CurrencyDataProps {
  data: CurrencyRates
}

const CODES = ['EUR', 'GBP', 'JPY'] as const

const CurrencyData = ({ data }: CurrencyDataProps) => {
  return (
    <div>
      <p>Base: {data.base}</p>
      <p>Date: {data.date}</p>
      <ul>
        {CODES.map(code => (
          <li key={code}>
            {code}: {data.rates[code].toFixed(4)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CurrencyData
