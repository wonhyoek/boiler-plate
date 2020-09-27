const express = require('express');
const app = express();
const port = 5000;
const mongoose = require("mongoose");
import Auth from './Routes/Auth';
const config = require('./Config/key');
import cookieParser from "cookie-parser";
import cors from "cors";

//mongoDB setting
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));


//middleware setting
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(cors());


//router setting
app.use('/api/auth', Auth);
app.get('/hello', (req, res) => {
    res.send('hello');
})


app.listen(port, () => console.log(`Server Running on ${port}`));