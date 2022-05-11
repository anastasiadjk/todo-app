const { Todo, validate } = require('../models/todo');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.send(todos);
    }
    catch (ex) {
        res.status(500).send('Something failed')
    }
});

router.post('/', async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        let todo = new Todo({
            text: req.body.text,
            completed: req.body.completed
        });
        await todo.save();

        res.send(todo);
    }
    catch (ex) {
        res.status(500).send('Something failed')
    }
});

router.put('/:id', async (req, res) => {
    try {

        const todo = await Todo.findByIdAndUpdate(req.params.id,
            {
                text: req.body.text,
                completed: req.body.completed
            }, { new: true });

        if (!todo) return res.status(404).send('The todo with the given ID was not found.');

        res.send(todo);
    }
    catch (ex) {
        res.status(500).send('Something failed')
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndRemove(req.params.id);
        if (!todo) return res.status(404).send('The todo with the given ID was not found.');
        res.send(todo);
    }
    catch (ex) {
        res.status(500).send('Something failed')
    }
});

router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) return res.status(404).send('The todo with the given ID was not found.');
        res.send(todo);
    }
    catch (ex) {
        res.status(500).send('Something failed')
    }
});

module.exports = router; 
