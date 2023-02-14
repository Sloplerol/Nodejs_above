const express = require('express');
const app = express();
const parse = require('body-parse');
app.use(parse.urlencoded({extended:false}));
app.listen(80,()=>{
    console.log('服务已启动');
})