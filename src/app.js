const express = require('express')

const app = express();
//created a new webserver
//you need to have a port number

//to handle a req app.use

app.use('/test',(req,res)=>{
    res.send("Hello I am from serverI am sitting on port 3000")
})

app.listen(3000,()=>{console.log("successfully listening on port 3000")});


