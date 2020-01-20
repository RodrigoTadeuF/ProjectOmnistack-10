const express = require ('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require ('http')

const routes = require ('./routes')
const { setupWebsockets } = require('./websocket')

const app = express()
const server = http.Server(app) 

setupWebsockets(server)

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-0snyj.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)

//Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: req.query (Filtros, ordenação, paginação ...) 
// Route Params: req.params(Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para a criação ou alteração de um registro)

//MongoDB (Não-relacional)