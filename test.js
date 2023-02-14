const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));
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