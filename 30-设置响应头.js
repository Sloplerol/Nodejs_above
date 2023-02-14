const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    // 设置允许来自任何网页的请求
    res.setHeader('Access-Control-Allow-Origin','*');
})
app.listen(80,()=>{
    console.log('服务已启动');
})