function change(htmlStr) {
    // 利用正则表达式将里面所有的html特殊字符筛选出来
    // g代表了全局下的htmlStr
    return htmlStr.replace(/<|>|"|&/g,(match)=>{
        switch(match) {
            case '<' :
                return '&lt';
            case '>' :
                return '&gt';
            case '"' :
                return '&quot';
            case '&' :
                return '&amp';
        }
    })
}
function unchange(htmlStr){
    return htmlStr.replace(/&lt|&gt|&quot|&amp/g,(match)=>{
        switch(match) {
            case '&lt': 
                return '<';
            case '&gt':
                return '>';
            case '&quot':
                return '"';
            case '&amp':
                return '&';
        }
    })
}
module.exports = {
    change,
    unchange
}