const express = require('express');
const app = express();
const c1 = function(req,res,next){
    console.log('这时第一个中间件');
    next();
}
const c2 = function(req,res,next){
    console.log('这时第二个中间件');
    next();
}
app.get('/',c1,c2,(req,res)=>{
    res.send('nb');
})
app.listen(80,()=>{
    console.log('端口已启动');
})