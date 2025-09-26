'use strict';
const fs               = require('fs');
const CodeGridMarkdown = require('../lib/index');

const CGMDRenderer = new CodeGridMarkdown({
  // options for marked
});
const str = fs.readFileSync(__dirname + '/cg.md', 'utf-8');

const htmlStr = CGMDRenderer.render(str);
console.log(htmlStr);
