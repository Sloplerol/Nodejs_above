const express = require('express');
const app = express();
// app.use(express.static('./clock'));
// 通过它就可以访问到clock目录下的所有文件
app.use('/public',express.static('./clock'));
app.listen(80,()=>{
    console.log('服务已启动');
})