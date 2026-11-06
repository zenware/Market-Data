export interface StockQuote {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  currency: string
  asOf: string
}

export interface CurrencyRates {
  amount: number
  base: string
  date: string
  rates: Record<string, number>
}

export interface ApiError {
  error: string
}
