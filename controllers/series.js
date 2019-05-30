const index = ({ Serie }, req, res) => {
    Serie.find({}, (err, result) => {
        res.render('series/index', { series: result })
    })
}

const novaProcess = ({ Serie }, req, res) => {
    const serie = new Serie(req.body)
    serie.save(() => {
        res.redirect('/series')
    })
}

const novaForm = (req, res) => {
    res.render('series/nova')
}

const excluir = ({ Serie }, req, res) => {
    const id = req.params.id
    Serie.remove({
        _id: id
    }, (err) => {
        res.redirect('/series')
    })
}

const editarForm = ({ Serie }, req, res) => {
    Serie.findOne({ _id: req.params.id }, (err, serie) => {
        res.render('series/editar', { serie })
    })
}

const editarProcess = ({ Serie }, req, res) => {
    const id = req.params.id
    Serie.findOne({ _id: req.params.id }, (err, serie) => {
        serie.name = req.body.name
        serie.status = req.body.status
        serie.save(() => {
            res.redirect('/series')
        })
    })
}

module.exports = {
    index,
    novaProcess,
    novaForm,
    excluir,
    editarForm,
    editarProcess
}