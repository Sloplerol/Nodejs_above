const express = require('express');
const app = express();
app.use((req,res,next)=>{
    // 获取请求到达服务器的时间
    const time = Date.now();
    req.firstime = time;
    next();
})
app.get('/',(req,res)=>{
    res.send('这次发送请求到达服务器的时间'+req.firstime);
})
app.get('/index',(req,res)=>{
    res.send('这次发送请求到达服务器的时间'+req.firstime);
})
app.listen(80,()=>{
    console.log('端口已启动');
})