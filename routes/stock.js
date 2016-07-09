const express = require('express')
const bhttp = require('bhttp')
const router = express.Router()

router.get('/:symbol', (req, res) => {
    const baseURL = 'http://dev.markitondemand.com/MODApis/Api/v2/'
    const endPoint = `${baseURL}Quote/json?symbol=${req.params.symbol}`

    bhttp.get(endPoint, {}, (error, response) => {
        if (error) console.log(error)
        res.send(response.body.toString())
    })
})

router.post('/:symbol/watch', (req, res) => {
    res.send('You are now watching:', req.params.symbol)
})

router.post('/:symbol/buy', (req, res) => {
    res.send('You just bought:', req.params.symbol)
})

router.post('/:symbol/sell', (req, res) => {
    res.send('You just sold:', req.params.symbol)
})

module.exports = router
