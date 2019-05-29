const index = (req, res) => {
    res.render('index')
}

const sobre = (req, res) => {
    res.render('sobre')
}

const series = (req, res) => {
    res.render('series')
}

module.exports={
    index,
    sobre,
    series
}