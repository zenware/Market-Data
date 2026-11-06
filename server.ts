import path from 'node:path'
import { fileURLToPath } from 'node:url'

import cors from 'cors'
import express from 'express'

import currency from './routes/currency'
import stock from './routes/stock'

const app = express()

const staticPath = path.join(fileURLToPath(new URL('.', import.meta.url)), 'static')

app.use(cors())
app.use(express.json())
app.use(express.static(staticPath))

app.use('/v1/stock', stock)
app.use('/v1/currency', currency)

app.use('/v1', (_req, res) => {
  res.status(404).json({ error: 'not found' })
})

app.get('/{*splat}', (_req, res) => {
  res.sendFile('index.html', { root: staticPath }, err => {
    if (err) {
      res.status(404).json({ error: 'client build missing; run npm run build' })
    }
  })
})

const entry = process.argv[1] ? path.resolve(process.argv[1]) : ''

if (entry === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT ?? 8080)
  app.listen(port, () => {
    console.log(`λ CORS-enabled server listening on port: ${port}`)
  })
}

export default app
