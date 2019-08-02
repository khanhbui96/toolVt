require('dotenv').config();
// node_modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const formidableMiddleware = require('express-formidable');
// my_modules
const userRoutes =  require('./routes/user.routes');
const profileRouters = require('./routes/profile.routes');
const timeRouters = require('./routes/time.routes')
// connect_db
mongoose.connect('mongodb://localhost/toolVt', {useCreateIndex: true, useNewUrlParser: true})


const app = express();

const port = process.env.PORT;

require('./configs/passport')(passport);
app.use(cors());
app.use(formidableMiddleware({
    encoding: 'utf-8',
    uploadDir:'/home/khanhbui/Desktop/toolVt/client/src/components/elements',
    multiples: true, // req.files to be arrays of files
  }))
app.use('/api/users', userRoutes);
app.use('/api/profiles',profileRouters );
app.use('/api/times',timeRouters );

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`)
})

