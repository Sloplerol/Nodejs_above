const path = require('path');
const prpath = '/a/b/c/d/index.html';
const npath = path.basename(prpath,'html');
console.log(npath);