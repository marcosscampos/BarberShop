const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    console.log(req.body)
    return res.send('Heeeheee')
})

module.exports = routes