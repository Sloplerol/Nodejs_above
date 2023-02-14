const express = require('express');
const router = express.Router();
router.post('/post',(req,res)=>{
    const body = req.body;
    //通过req.body获取的是包含url-encoded类型的数据
    res.send({
        status: 0,
        msg: 'post请求成功',
        data: body
    })
})
module.exports = router;