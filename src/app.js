const express = require('express')

const app = express();

app.get('/user/:id/:name',(req,res)=>{
    console.log(req.params)
    res.send({firstName:"rama",LastName:"Roy"})
})


app.post('/user',(req,res)=>{
    res.send("Data successfuly send to the database")
})

app.delete('/user',(req,res)=>{
    res.send('deleted successfully')
})
//created a new webserver
//you need to have a port number

//to handle a req app.use

app.use('/test',(req,res)=>{
    res.send("Hello I am from serverI am sitting on port 3000")
})
//app.use will match all HTTP methods 

app.listen(3000,()=>{console.log("successfully listening on port 3000")});


