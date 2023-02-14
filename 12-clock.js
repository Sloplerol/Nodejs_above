const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer();
server.on('request',(req,res)=>{
    let nurl = '';
    const url = req.url;
    if (url==='/') {
        nurl = path.join(__dirname,'./clock/index1.html');
    }else {
        nurl = path.join(__dirname,'./clock',url);
    }
    res.setHeader('Content-Type','text/html;charset=utf-8');
    fs.readFile(nurl,'utf-8',function(err,dataStr){
        if(err) {
            return res.end('启动失败');
        }
        res.end(dataStr);
        
    })
})
server.listen(80,()=>{
    console.log('启动成功');
})