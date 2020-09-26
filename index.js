const express = require('express');
const app = express();
const port = 5000;
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://wonhyoek:ab8975@cluster0.jls2e.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send("Hello World"));

app.listen(port, () => console.log(`Server Running on ${port}`));