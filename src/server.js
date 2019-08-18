const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

class App {
    constructor() {
        this.express = express()
        this.idDev = process.env.NODE_ENV !== 'production'
        this.middlewares()
        this.Views()
        this.routes()
    }
    middlewares() {
        this.express.use(express.urlencoded({ extended: false }))
    }
    Views() {
        nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
            watch: this.idDev,
            express: this.express,
            autoescape: true
        })
        this.express.set('view engine', 'njk')
    }
    routes() {
        this.express.use(require('./routes'))
    }
}
module.exports = new App().express