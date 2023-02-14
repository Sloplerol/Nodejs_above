const http = require('http');
const server = http.createServer();
server.on('request',(req,res)=>{
    const url = req.url;
    let content = '<h2>404NOFOUND</h2>';
    if (url==='/' || url==='/index.html') {
        content = '<h2>首页</h2>';
    }else if (url==='/nav.html') {
        content = '<h2>导航栏</h2>';
    }
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end(content);
})
server.listen(80,()=>{
    console.log('服务已启动');
})