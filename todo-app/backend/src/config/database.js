const mongoose = require('mongoose')
mongoose.Promise = global.Promise //Não é importante só pra tirar msg advertência
module.exports = mongoose.connect('mongodb://localhost:28017/todo')