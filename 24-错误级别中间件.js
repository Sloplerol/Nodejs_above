const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    throw new Error('程序执行错误');
})
app.use(function(err,req,res,next){
    console.log('程序出错');
    res.send('Error:'+err.message);
})
app.listen(80,()=>{
    console.log('端口已启动');
})