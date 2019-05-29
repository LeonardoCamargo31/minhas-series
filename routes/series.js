const seriesController = require('../controllers/series')

const express = require('express')
const router = express.Router()

router.get('/', seriesController.index)
router.get('/nova', seriesController.nova)

module.exports = router