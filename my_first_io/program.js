var fs = require('fs');

var buf = fs.readFileSync('test.txt');

console.log(buf.toString().split('\n').length -1);
