console.log('sadasdsadiaidsadcl');
const fs = require('fs');
fs.readFile('./file/hello3.txt','utf-8',function(err,dataStr){
    if(err) {
        return console.log('读取失败');
    }
    const predata = dataStr.split(' ');
    const nowdata = [];
    predata.forEach((word)=>{
        nowdata.push(word.replace('=',':'));
    })
    const newdata = nowdata.join('\n');
    console.log(newdata);
})