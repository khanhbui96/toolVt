require('dotenv').config();
// node_modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
// my_modules
const userRoutes =  require('./routes/user.routes');
// connect_db
mongoose.connect('mongodb://localhost/toolVt', {useCreateIndex: true, useNewUrlParser: true})


const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use('/api/users', userRoutes);

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`)
})