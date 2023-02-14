const http = require('http');
const server = http.createServer();
server.on('request',(req,res)=>{
    // 监听客户端需求
    const url = req.url;
    // 当你触发request事件事件 执行回调函数
    const str = `欢迎来到${url}`;
    res.end(str);
})
server.listen(9000,()=>{
    // 当启动服务器后立刻执行回调函数
    console.log('9000端口已启动');
})