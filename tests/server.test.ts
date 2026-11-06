// @vitest-environment node
import request from 'supertest'
import { afterEach, describe, expect, it, vi } from 'vitest'

import app from '../server'

const stubFetch = (response: { ok: boolean; status: number; payload: unknown }) => {
  vi.stubGlobal(
    'fetch',
    vi.fn().mockResolvedValue({
      ok: response.ok,
      status: response.status,
      json: async () => response.payload
    })
  )
}

describe('stock quotes', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('normalizes Yahoo metadata into a quote', async () => {
    stubFetch({
      ok: true,
      status: 200,
      payload: {
        chart: {
          result: [
            {
              meta: {
                symbol: 'AAPL',
                longName: 'Apple Inc.',
                regularMarketPrice: 200,
                chartPreviousClose: 190,
                currency: 'USD',
                regularMarketTime: 1700000000
              }
            }
          ]
        }
      }
    })

    const response = await request(app).get('/v1/stock/aapl')

    expect(response.status).toBe(200)
    expect(response.body).toMatchObject({
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 200,
      change: 10,
      currency: 'USD'
    })
    expect(response.body.changePercent).toBeCloseTo(5.263, 3)
  })

  it('returns 404 when the provider has no result', async () => {
    stubFetch({ ok: true, status: 200, payload: { chart: { result: [] } } })

    const response = await request(app).get('/v1/stock/ZZZZ')

    expect(response.status).toBe(404)
  })

  it('returns 502 when the provider rate limits', async () => {
    stubFetch({ ok: false, status: 429, payload: {} })

    const response = await request(app).get('/v1/stock/AAPL')

    expect(response.status).toBe(502)
  })

  it('rejects invalid symbols', async () => {
    const response = await request(app).get(`/v1/stock/${encodeURIComponent('A B')}`)

    expect(response.status).toBe(400)
  })
})

describe('currency rates', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('passes through provider rates', async () => {
    stubFetch({
      ok: true,
      status: 200,
      payload: {
        amount: 1,
        base: 'USD',
        date: '2024-01-01',
        rates: { EUR: 0.915, GBP: 0.79, JPY: 144.5 }
      }
    })

    const response = await request(app).get('/v1/currency/USD')

    expect(response.status).toBe(200)
    expect(response.body.base).toBe('USD')
    expect(typeof response.body.rates.EUR).toBe('number')
  })
})
