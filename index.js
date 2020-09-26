const express = require('express');
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const Auth = require('./Routes/Auth');

//mongoDB setting
mongoose.connect('mongodb+srv://wonhyoek:ab8975@cluster0.jls2e.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));


//middleware setting
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//router setting
app.use('/api/auth', Auth);


app.listen(port, () => console.log(`Server Running on ${port}`));