const express = require('express') //singleton independente da onde chama a instância do server const server = express é sempre diferente

module.exports = function(server) {

    //API Routes
    const router = express.Router()
    server.use('/api', router) //midler. Sempre q tiver a url /api irá chamar esta rota
    
    //TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}
