'use strict';
var fs               = require('fs');
var CodeGridMarkdown = require('../index');

var CGMDRenderer = new CodeGridMarkdown({
  // options for marked
});
var str = fs.readFileSync(__dirname + '/cg.md', 'utf-8');

var htmlStr = CGMDRenderer.render(str);
console.log(htmlStr);
