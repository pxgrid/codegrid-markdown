'use strict';
var CodeGridMarkdown = new (require('./index'))();
var fs = require('fs');
var str = fs.readFileSync('./cg.md', 'utf-8');

CodeGridMarkdown.render(str).then(function(htmlStr) {
  console.log('変換前: =====================');
  console.log(str);
  console.log('変換後: =====================');
  console.log(htmlStr);
});
// CodeGridMarkdown.render(str);
