const fs = require('fs');
fs.readFile('/Users/satrol_/JS chapter/Nodejs/file/hello.txt',function(err,dataStr){
    if(err) {
        return console.log('error');
    }
    console.log('success');
})