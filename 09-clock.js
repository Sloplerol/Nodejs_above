const fs = require('fs');
const path = require('path');
// 利用正则表达式匹配页面中的css和js文件
//待会要匹配的css文件  [\s\S]代表了空格与非空格也就是任意字符  *代表了字符可以是任意多次  \防止/和内部冲突才对结束标签进行转义
const regCSS = /<style>[\s\S]*<\/style>/;
//待会要匹配的js文件
const regJS = /<script>[\s\S]*<\/script>/;

fs.readFile(path.join(__dirname,'index.html'),function(err,dataStr){
    if(err) {
        return console.log('读取失败');
    }
    // 当读取成功可以解析html  css js代码
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);
})
function resolveCSS(htmlStr){
    // 使用正则表达式把dataStr里的元素以数组的形式进行存储 style部分为首位
    const r1 = regCSS.exec(htmlStr);
    // 将css部分的style标签去掉
    const newstyle = r1[0].replace('<style>','').replace('</style>','');
    // console.log(newstyle);
    fs.writeFile(path.join(__dirname,'./file/index.css'),newstyle,function(err){
        if (err) {
            console.log('写入失败');
        }
        console.log('css写入成功');
    })
    
}
function resolveJS(htmlStr) {
    // 此时js部分为首位因为regJS就是先匹配script标签在去生成其他元素
    const j1 = regJS.exec(htmlStr);
    // console.log(j1);
    const newjs = j1[0].replace('<script>','').replace('</script>','');
    fs.writeFile(path.join(__dirname,'./file/index.js'),newjs,function(err){
        if (err) {
            return console.log('写入失败');
        }
        console.log('js写入成功');
    })
}
function resolveHTML(htmlStr) {
    const newhtml = htmlStr.replace(regCSS,'<link rel="stylesheet" href="./index1.css">').replace(regJS,'<script src="./index1.js"></script>');
    fs.writeFile(path.join(__dirname,'./file/index1.html'),newhtml,function(err){
        if (err) {
            return console.log('写入失败');
        }
        console.log('html写入成功');
    })
}
