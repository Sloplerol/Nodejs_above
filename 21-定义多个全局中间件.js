const express = require('express');
const app = express();
app.use((req,res,next)=>{
    console.log('第一个中间件');
    next();
})
app.use((req,res,nex)=>{
    console.log('第二个中间件');
    next();
})
app.get('/',(req,res)=>{
    console.log('这里是路由中心');
    res.send('hello');
})
app.listen(80,()=>{
    console.log('服务已启动');
})