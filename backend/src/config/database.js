const mongoose = require('mongoose')

//usar Promise global do node
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')