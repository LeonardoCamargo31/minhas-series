const pagesController = require('../controllers/pages')

const express = require('express')
const router = express.Router()

router.get('/', pagesController.index)
router.get('/sobre', pagesController.sobre)
router.get('/series', pagesController.series)

module.exports = router