import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import StockDetails from '../client/components/StockDetails'
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

describe('StockDetails', () => {
  it('renders the symbol, name, price and change', () => {
    render(<StockDetails quote={quote} />)

    expect(screen.getByText('AAPL')).toBeDefined()
    expect(screen.getByText('Apple Inc.')).toBeDefined()
    expect(screen.getByText('$200.00')).toBeDefined()
    expect(screen.getByText('+10.00 (5.26%)')).toBeDefined()
  })
})
