const index = async ({ Serie }, req, res) => {
    const result = await Serie.find({})
    res.render('series/index', { series: result })
}

const novaForm = (req, res) => {
    res.render('series/nova', { errors: null })
}

const novaProcess = async ({ Serie }, req, res) => {
    try {
        const serie = new Serie(req.body)
        await serie.save()
        res.redirect('/')
    } catch (e) {
        //console.log(Object.keys(e.errors))//['name']
        res.render('series/nova', { errors: Object.keys(e.errors) })
    }
}

const excluir = async ({ Serie }, req, res) => {
    await Serie.remove({ _id: req.params.id })
    res.redirect('/')
}

const editarForm = async ({ Serie }, req, res) => {
    const serie = await Serie.findOne({ _id: req.params.id })
    res.render('series/editar', { serie, errors: null })
}

const editarProcess = async ({ Serie }, req, res) => {
    const serie = await Serie.findOne({ _id: req.params.id })
    serie.name = req.body.name
    serie.status = req.body.status
    try {
        await serie.save()
        res.redirect('/')
    } catch (e) {
        //console.log(Object.keys(e.errors))//['name']
        res.render('series/editar', { serie, errors: Object.keys(e.errors) })
    }
}

const infoForm = async ({ Serie }, req, res) => {
    const serie = await Serie.findOne({ _id: req.params.id })
    res.render('series/info', { serie })
}

const infoProcess = async ({ Serie }, req, res) => {
    await Serie.updateOne({ _id: req.params.id }, { $push: { comments: req.body.comentario } })
    res.redirect('/info/' + req.params.id)
}

module.exports = {
    index,
    novaProcess,
    novaForm,
    excluir,
    editarForm,
    editarProcess,
    infoForm,
    infoProcess
}