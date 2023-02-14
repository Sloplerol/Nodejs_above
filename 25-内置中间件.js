const express = require('express');
const app = express();
const parser = require('body-parser')
app.use(express.json());
app.use(parser.urlencoded({extended:false}));
app.post('/user',(req,res)=>{
    console.log(req.body);
    res.send('hello')
})
app.post('/book',(req,res)=>{
    console.log(req.body);
    res.send('world');
})

app.listen(80,()=>{
    console.log('端口已启动');
})