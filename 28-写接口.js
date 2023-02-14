const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({extended : false}));
const router = require('./挂载路由');
// /api为统一的访问路径
// 在这里router就是一个中间件
app.use('/api',router);
app.listen(80,()=>{
    console.log('服务器已启动');
})