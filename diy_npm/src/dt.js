function formatTime(time){
    const dt = new Date(time);
    const YY = buling(dt.getFullYear());
    const MM = buling(dt.getMonth()+1);
    const DD = buling(dt.getDay());
    const hh = buling(dt.getHours());
    const mm = buling(dt.getMinutes());
    const ss = buling(dt.getSeconds());
    return `${YY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
}
function buling(n){
    return n > 10 ? n : '0'+n;
}
module.exports = {
    formatTime
}