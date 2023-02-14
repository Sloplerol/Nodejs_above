const fs = require('fs');
fs.readFile(__dirname+'/file/hello.txt',function(err,dataStr){
    if (err) {
        return console.log('读取失败');
    }
    console.log('读取成功');
})