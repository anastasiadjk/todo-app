const Joi = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;


const todoSchema = new Schema({
    text: {
        type: String,
        minlenght: 2,
        maxlength: 500
    },
    completed: {
        type: Boolean,
        default: false
    },
})

const Todo = mongoose.model('Todo', todoSchema);


function validateTodo(todo) {
    const schema = Joi.object({
        text: Joi.string().min(2).max(500).required(),
        completed: Joi.boolean().required()
    });
    return schema.validate(todo);
};


module.exports.Todo = Todo;
module.exports.validate = validateTodo;