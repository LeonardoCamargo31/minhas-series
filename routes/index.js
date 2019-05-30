const seriesRoute = require('./series')

const init = () => {
    const express = require('express')
    const router = express.Router()

    router.use('/', seriesRoute)

    return router
}

module.exports = init