const seriesController = require('../controllers/series')

const Serie = require('../models/serie')
const models={
    Serie
}

const express = require('express')
const router = express.Router()

router.get('/', seriesController.index.bind(null,models))

router.get('/nova', seriesController.novaForm)

router.post('/nova', seriesController.novaProcess.bind(null,models))

router.get('/excluir/:id', seriesController.excluir.bind(null,models))

router.get('/editar/:id', seriesController.editarForm.bind(null,models))
router.post('/editar/:id', seriesController.editarProcess.bind(null,models))

router.get('/info/:id', seriesController.infoForm.bind(null,models))
router.post('/info/:id', seriesController.infoProcess.bind(null,models))


module.exports = router