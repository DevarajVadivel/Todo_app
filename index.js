const express = require('express');
const app = express();

const port = 8000;






app.listen(port,function(err){
    if(err){
        console.log("Error on loading server");
        return;

    }

    console.log('Hey Deva, Server is up and running...!');
})