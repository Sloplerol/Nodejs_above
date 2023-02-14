const dt = new Date();
function getTime(){
    const yy = dt.getFullYear();
    const mm = buling(dt.getMonth()+1);
    const dd = buling(dt.getDay());
    const h = buling(dt.getHours());
    const m = buling(dt .getMinutes());
    const s = buling(dt.getSeconds());
    return `${yy}-${mm}-${dd}-${h}-${m}-${s}`;
    // 封装函数获取当今时间
}
function buling(n){
    return n>9 ? n : '0'+n;//补零操作
}
module.exports = {
    // 向外共享接口
    getTime
}