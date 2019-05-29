const pagesController = require('../controllers/pages')

const express = require('express')
const router = express.Router()

router.get('/', pagesController.index)
router.get('/sobre', pagesController.sobre)

module.exports = router