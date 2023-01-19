const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');
const Task = require('./models/task');

// Add express router

app.use(express.urlencoded());
app.use('/', require('./routes'));

// setting up ejs

app.set('view engine', 'ejs');
app.set('views', './views');

// setting up static files

app.use(express.static('./assets'));




app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }
    console.log(`Server is running through port ${port}`);
});