const express = require('express');
// 创建路由对象
const routine = express.Router();
// 挂载路由
routine.get('/get',(req,res)=>{
    res.send('get module on')
})
routine.post('/post',(req,res)=>{
    res.send('post module on');
})
// 向外倒出路由对象
module.exports = routine 