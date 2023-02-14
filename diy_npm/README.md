### 安装
```js
    npm i paname
```
### 导入
```js   
    const paname = require('paname');
```
### 格式化时间
```js
    const dt = paname.formatTime(new Date());
    //打印结果为2022-12-04 10:29:20
    console.log(dt);
```
### 转义HTML字符
```js
    //转换前
    const waitchange = '<h1 style="sad">sad&nbsp;</h1>';
    // 利用change方法转换后
    const comchange = paname.change(waitchange);
    // 最终结果为&lth1 style=&quotsad&quot&gtsad&ampnbsp;&lt/h1&gt
    console.log(comchange);
```
### 还原HTML字符
```js
    //还原前&lth1 style=&quotsad&quot&gtsad&ampnbsp;&lt/h1&gt
    const renew = paname.unchange(waitchange);
    // 利用unchange方法还原后   <h1 style="sad">sad&nbsp;</h1>
    console.log(renew);
```

### 开源协议
ISC