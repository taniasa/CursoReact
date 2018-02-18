//criando midle
module.exports = (req, res, next) => { //resquest response=> res
    res.header('Access-Control-Allow-Origin', '*') //qualquer origem
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next() //Continua o fluxo da aplicação
}