import express from 'express'

import type { CurrencyRates } from '../shared/api'

const router = express.Router()

const BASE_PATTERN = /^[A-Z]{3}$/

router.get('/:base', async (req, res) => {
  const base = req.params.base.toUpperCase()

  if (!BASE_PATTERN.test(base)) {
    res.status(400).json({ error: 'invalid currency' })
    return
  }

  try {
    const upstream = await fetch(
      `https://api.frankfurter.dev/v1/latest?base=${encodeURIComponent(base)}`
    )

    if (!upstream.ok) {
      res.status(502).json({ error: `rates provider returned ${upstream.status}` })
      return
    }

    const rates = (await upstream.json()) as CurrencyRates
    res.json(rates)
  } catch {
    res.status(502).json({ error: 'rates provider unavailable' })
  }
})

export default router
