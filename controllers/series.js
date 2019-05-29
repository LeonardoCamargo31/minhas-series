const Serie = require('../models/serie')

const index = (req, res) => {
    Serie.find({}, (err, result) => {
        res.render('series/index', { series: result })
    })

}

const nova = (req, res) => {
    const serie = new Serie({
        name: 'Breaking bad',
        status: 'watched'
    })
    serie.save()
    res.render('series/index')
}

module.exports = {
    index,
    nova
}