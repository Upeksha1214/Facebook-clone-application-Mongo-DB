const express = require('express');
const app= express();
const port=3535;
const mongoose=require('mongoose');

const user=require('./router/user')
const post=require('./router/post')


app.use(express.json())

const url='mongodb://localhost/facebook'
mongoose.connect(url,{useNewUrlParser : true})
const con=mongoose.connection

con.on("open",()=>{
    console.log('monogoDB conneted..!')
})
app.use('/user',user)
app.use('/post',post)


app.listen(port,()=>{
    console.log("sever api start on port port 8000 ")
    
})