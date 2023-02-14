const express = require('express');
const app = express();
app.get('/api/jsonp',(req,res)=>{
    //得到函数名称
    const funcname = req.query.callback;
    //定义发送到客户端到数据
    const data = {rname:'sad',age:29};
    //拼接函数调用 函数参数一定得是JSON格式的字符串
    const sciptstr = `${funcname}(${JSON.stringify(data)})`;
    // 响应到客户端
    res.send(sciptstr);
})
app.listen(80,()=>{
    console.log('端口已启动');
})