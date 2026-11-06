import express from 'express'

import type { StockQuote } from '../shared/api'

const router = express.Router()

const SYMBOL_PATTERN = /^[A-Z0-9.^=-]{1,20}$/

interface YahooQuoteMeta {
  symbol?: string
  longName?: string
  shortName?: string
  regularMarketPrice?: number
  chartPreviousClose?: number
  currency?: string
  regularMarketTime?: number
}

interface YahooChartResponse {
  chart?: {
    result?: Array<{
      meta?: YahooQuoteMeta
    }>
  }
}

router.get('/:symbol', async (req, res) => {
  const symbol = req.params.symbol.trim().toUpperCase()

  if (!SYMBOL_PATTERN.test(symbol)) {
    res.status(400).json({ error: 'invalid symbol' })
    return
  }

  const endpoint = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=1d&interval=1d`

  try {
    const upstream = await fetch(endpoint, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; MarketData/1.0)',
        Accept: 'application/json'
      }
    })

    if (!upstream.ok) {
      if (upstream.status === 404) {
        res.status(404).json({ error: `no quote for ${symbol}` })
        return
      }

      res.status(502).json({ error: `quote provider returned ${upstream.status}` })
      return
    }

    const payload = (await upstream.json()) as YahooChartResponse
    const meta = payload.chart?.result?.[0]?.meta

    if (!meta || typeof meta.regularMarketPrice !== 'number') {
      res.status(404).json({ error: `no quote for ${symbol}` })
      return
    }

    const price = meta.regularMarketPrice
    const previousClose =
      typeof meta.chartPreviousClose === 'number' ? meta.chartPreviousClose : price
    const change = price - previousClose
    const changePercent = previousClose === 0 ? 0 : (change / previousClose) * 100
    const asOf =
      typeof meta.regularMarketTime === 'number'
        ? new Date(meta.regularMarketTime * 1000).toISOString()
        : new Date().toISOString()

    const quote: StockQuote = {
      symbol,
      name: meta.longName ?? meta.shortName ?? symbol,
      price,
      change,
      changePercent,
      currency: meta.currency ?? 'USD',
      asOf
    }

    res.json(quote)
  } catch {
    res.status(502).json({ error: 'quote provider unavailable' })
  }
})

export default router
