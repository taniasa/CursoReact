const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runValidators: true}) //todoSchema valida o tipo, se é requirido etc no schema

module.exports = Todo