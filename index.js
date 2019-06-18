const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const bodyParser = require('body-parser')

const mongo = process.env.MONGODB || 'mongodb+srv://leonardo:ViupcIHKw6dj6v8V@minhas-series-vzmjf.mongodb.net/test?retryWrites=true&w=majority'
const mongoose = require('mongoose')
//para o mongose usar as promise padrão do node
mongoose.Promise = global.Promise

//define o view engine - ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
//middleware para definir para o express onde fica o assets
app.use(express.static(path.join(__dirname, 'public')))

//middleware que faz o processamento do corpo da requisição
app.use(bodyParser.urlencoded({ extended: true }))

const router = require('./routes/index')
app.use(router())

mongoose.connect(mongo, { useNewUrlParser: true }).then(() => {
    app.listen(port, () => {
        console.log('Servidor rodando na porta: ' + port)
    })
}).catch((e) => {
    console.log('Não possível conectar ao banco de dados, erro: ' + e)
})