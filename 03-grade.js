const fs = require('fs');
fs.readFile('./file/hello3.txt','utf-8',function(err,dataStr){
    if (err) {
        return console.log('读取失败');
    }
    const preres = dataStr.split(' ');
    const nowres = [];
    preres.forEach((items)=>{
        nowres.push(items.replace('=',':'));
    })
    const newres = nowres.join('\n');
    fs.writeFile('./file/hello4.txt',newres,function(err){
        if (err) {
            return console.log('写入失败');
        }
        console.log('成绩写入成功');
    })
})