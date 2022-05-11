const mongoose = require('mongoose');
const express = require('express');
const bodyparser = require('body-parser');
const todos = require('./routes/todos');


const app = express();
mongoose.connect('mongodb://localhost/todo', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));


app.use(bodyparser.json())
require("./cors")(app);
app.use('/api/todos', todos);

const port = process.env.PORT || 3900;
app.listen(port, () => console.log(`Listening on port ${port}...`));