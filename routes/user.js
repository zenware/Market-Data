const express = require('express')
const router = express.Router()
// const config = require('../config.json')
// const pg = require('pg')
// const knex = require('knex')(config.knex)

router.get('/:username', (req, res) => {
    res.send('You have request user', req.params.username)
})

router.post('/create', (req, res) => {
    res.send('Creating user with details:', req.body)
})

module.exports = router
