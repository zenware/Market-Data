const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const bhttp = require('bhttp')
const app = express()

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

app.listen(8080, () => {
    console.log('λ CORS-enabled server listening on port: 8080')
})
