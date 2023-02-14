const fs = require('fs');
fs.writeFile('./file/hello2.txt','made in heaven',function(err){
    if (err) {
        return console.log('写入成功');
    }
    return console.log('写入失败');
})