const Todo = require('./todo')


//registra todos os metodos
//para update força o retornar o registro atualizado e faz validacao
Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo