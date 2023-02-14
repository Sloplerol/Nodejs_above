const fs = require('fs');
fs.readFile('./file/hello1.txt','utf-8',function(err,dataStr){
    if (err) {
        return console.log('文件读入失败，文件的输出结果是'+err.message);
    }
    return console.log('文件读取成功，文件的输出结果是'+ dataStr);
})