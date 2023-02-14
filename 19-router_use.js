const express = require('express');
const app = express();
// 导入路由模块
const routine = require('./18-module路由');
// 注册路由模块
app.use('/app',routine);

app.listen(80,()=>{
    console.log('服务已启动');
})