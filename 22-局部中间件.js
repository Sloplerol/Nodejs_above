const express = require('express');
const app = express();
const m1 = function(req,res,next) {
    console.log('这是一个局部中间件');
    next();
}
app.get('/',m1,(req,res)=>{
    res.send('hello');
})
app.get('/index',(req,res)=>{
    res.send('world');
    //在我们请求index时候并不会打印局部中间件里的内容
})
app.listen(80,()=>{
    console.log('服务已启动');
})