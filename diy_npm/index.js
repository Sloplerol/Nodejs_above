const dt = require('./src/dt');  //格式化时间模块
const ex = require('./src/exchange');   //定义转换字符与还原字符
module.exports = {
    ...dt,   
    ...ex
    //...扩展运算符将对象的属性全部展开
}