const express = require('express');
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const Auth = require('./Routes/Auth');
const config = require('./Config/key');

//mongoDB setting
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));


//middleware setting
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//router setting
app.use('/api/auth', Auth);


app.listen(port, () => console.log(`Server Running on ${port}`));