const mongoose = require('mongoose')
const todoItem = new mongoose.Schema({
    task : {
        type : String,
    },
    completed : Boolean,
})
const Todo = mongoose.model('Todo',todoItem)

module.exports = Todo;