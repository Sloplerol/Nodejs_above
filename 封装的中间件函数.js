const qs = require('querystring');
const fn = (req,res,next)=>{
    // str用来接收客户端发送过来的表单数据
    let str = '';
    // 监听data事件
    req.on('data',(chunk)=>{
        // 如果数据量比较大需要将其分割成很多份的chunk数据
        str+=chunk;
    })
    // 监听end事件拿到完整的表单数据
    req.on('end',(chunk)=>{
        // console.log(str);
        // 拿到完整的字符后需要将其转化为对象
        const dt = qs.parse(str);
        // 利用querystring的parse方法将字符串解析为对象
        // console.log(dt);
        // 挂载dt属性
        req.dt = dt;
        next();
    })
}
//导出中间件封装函数
module.exports = fn;