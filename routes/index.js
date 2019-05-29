const pagesRoute = require('./pages')
const seriesRoute = require('./series')

const init = () => {
    const express = require('express')
    const router = express.Router()

    router.use('/', pagesRoute)
    router.use('/series', seriesRoute)

    return router
}

module.exports = init