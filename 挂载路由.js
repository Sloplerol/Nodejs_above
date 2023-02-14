const express = require('express');
// 挂载对应路由
const router = express.Router();
router.get('/get',(req,res)=>{
    //通过req.query拿到客户端发送到服务端到数据
    const query = req.query;
    res.send({
        status: 0,
        msg : 'get请求成功',
        data: query
    })
})
router.post('/post',(req,res)=>{
    const body = req.body;
    //通过req.body获取的是包含url-encoded类型的数据
    res.send({
        status: 0,
        msg: 'post请求成功',
        data: body
    })
})
router.delete('/delete',(req,res)=>{
    res.send({
        status:0,
        msg: 'delete请求成功'
    })
})

module.exports = router;
