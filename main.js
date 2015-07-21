'use strict';
var CodeGridMarkdown = new (require('./index'))({
  // options for marked
});
var fs = require('fs');
var str = fs.readFileSync('./cg.md', 'utf-8');

console.log('変換前: =====================');
console.log(str);

console.log('変換後: =====================');
var htmlStr = CodeGridMarkdown.render(str);
console.log(htmlStr);
