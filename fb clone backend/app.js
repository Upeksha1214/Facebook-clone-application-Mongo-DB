const express = require('express');
const app= express();
const port=8000;
const mongoose=require('mongoose')
const user=require('./router/user')


app.use(express.json())

const url='mongodb://localhost/facebook'
mongoose.connect(url,{useNewUrlParser : true})
const con=mongoose.connection

con.on("open",()=>{
    console.log('monogoDB conneted..!')
})
app.use('/user',user)


app.listen(port,()=>{
    console.log("sever api start on port port 8000 ")
    
})