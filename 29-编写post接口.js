const express = require('express');
const app = express();
const router = require('./post接口');
app.use('/api',router);

app.listen(80,()=>{
    console.log('端口已启动');
})