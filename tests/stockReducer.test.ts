import { describe, expect, it } from 'vitest'

import stock, {
  STOCK_QUOTE_FAILURE,
  STOCK_QUOTE_REQUEST,
  STOCK_QUOTE_SUCCESS,
  type StockAction
} from '../client/reducers/stock'
import type { StockQuote } from '../shared/api'

const quote: StockQuote = {
  symbol: 'AAPL',
  name: 'Apple Inc.',
  price: 200,
  change: 10,
  changePercent: 5.263157894736842,
  currency: 'USD',
  asOf: '2024-01-01T00:00:00.000Z'
}

describe('stock reducer', () => {
  it('starts empty and idle', () => {
    expect(stock(undefined, { type: 'UNKNOWN' } as unknown as StockAction)).toEqual({
      quote: null,
      loading: false,
      error: null
    })
  })

  it('marks a request as loading and clears the previous error', () => {
    const state = stock(
      { quote: null, loading: false, error: 'previous failure' },
      { type: STOCK_QUOTE_REQUEST }
    )

    expect(state.loading).toBe(true)
    expect(state.error).toBeNull()
  })

  it('stores a successful quote', () => {
    const state = stock(undefined, { type: STOCK_QUOTE_SUCCESS, payload: quote })

    expect(state.quote).toEqual(quote)
    expect(state.loading).toBe(false)
  })

  it('stores a failure message', () => {
    const state = stock(undefined, { type: STOCK_QUOTE_FAILURE, error: 'provider down' })

    expect(state.error).toBe('provider down')
    expect(state.loading).toBe(false)
  })
})
