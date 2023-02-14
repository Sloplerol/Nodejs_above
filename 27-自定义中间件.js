const express = require('express');
const app = express();

// 定义一个解析表单数据的中间件
const fn = require('./封装的中间件函数');
app.use(fn);
app.post('/',(req,res)=>{
    // 验证是否挂载dt属性成功
    res.send(req.dt);
})
app.listen(80,()=>{
    console.log('服务端口已启动');
})