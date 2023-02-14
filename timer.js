const moment = require('moment');
const format = moment().format('YYYY-MM-DD HH:mm:ss'); //moment()获取当前时间 format()对当前时间进行初始化
console.log(format);