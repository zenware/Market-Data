// const config = require('./config.json')
const env = process.env.NODE_ENV
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const pg = require('pg')
// const knex = require('knex')(config.knex)
const bodyParser = require('body-parser')
const bhttp = require('bhttp')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './static')))

app.get('/v1/currency/:symbol', (req, res) => {
    const endPoint = `http://api.fixer.io/latest?base=${req.params.symbol}`

    bhttp.get(endPoint, {}, (error, response) => {
        if (error) console.log(error)
        res.send(response.body.toString())
    })
})

app.get('/v1/stock/:symbol', (req, res) => {
    const baseURL = 'http://dev.markitondemand.com/MODApis/Api/v2/'
    const endPoint = `${baseURL}Quote/json?symbol=${req.params.symbol}`

    bhttp.get(endPoint, {}, (error, response) => {
        if (error) console.log(error)
        res.send(response.body.toString())
    })
})

app.get('/v1/user/:username', (req, res) => {
    res.send('You have request user', req.params.username)
})

app.listen(8080, () => {
    console.log('λ CORS-enabled server listening on port: 8080')
})
