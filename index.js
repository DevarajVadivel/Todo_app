const express = require('express');
const path = require('path');
const app = express();

const port = 8000;

//setting up the Ejs template engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


// whatever the request that comes in, this line will direct to the routes folder's index.js
app.use('/', require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log("Error on loading server");
        return;

    }

    console.log('Hey Deva, Server is up and running...!');
})