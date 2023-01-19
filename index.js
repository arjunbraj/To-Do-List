const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');






app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }
    console.log(`Server is running through port ${port}`);
});