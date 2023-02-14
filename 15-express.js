// 导入express模块
const express = require('express');
// 创建web服务器
const app = express();
// 启动服务器
app.get('/user',(req,res)=>{
    // console.log(req.query);
    // res.send(req.query);
    res.send({age:28,rname:'asd'});
})
app.get('/url_num',(req,res)=>{
    // req.query获取到的是url参数 默认情况下为空对象
    console.log(req.query);
    res.send(req.query);
})
app.get('/user/:id/:rname',(req,res)=>{
    // id是参数名 输入的值是动态匹配过来的 
    //req.params是动态匹配到的url参数 默认情况下为空对象 
    console.log(req.params);
    res.send(req.params);
})
app.post('/user',(req,res)=>{
    //express提供的send方法可以返回JSON对象也可以是文本字符串
    res.send('请求已生效');
})
app.listen(80,()=>{
    console.log('端口已启动');
})