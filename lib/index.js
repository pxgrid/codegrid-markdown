'use strict';
var marked = require('marked');

var CodeGridMarkdown = function(options) {
  if (!(this instanceof CodeGridMarkdown)) { return new CodeGridMarkdown(options); }
  return this;
};

CodeGridMarkdown.prototype = {
  constructor: CodeGridMarkdown,
  render:      render
};

function render(str) {
  str = str || '';

  var retStr = '';

  var lines = str.split(/[\n\r]/);
  var line;

  var tokens = [];
  var isCGMD = false;

  while ((line = lines.shift()) !== undefined) {
    if (/\[cg:(\w+)\]/.exec(line.trim())) {
      isCGMD = true;
      tokens.push({
        type: 'cgmd',
        body: []
      });
      tokens[tokens.length - 1].body.push(line);
      continue;
    }
    if ('[/cg]' === line.trim()) {
      isCGMD = false;
      tokens[tokens.length - 1].body.push(line);
      continue;
    }

    if (isCGMD) {
      tokens[tokens.length - 1].body.push(line);
    }
    else {
      if (tokens.length === 0 || tokens[tokens.length - 1].type !== 'md') {
        tokens.push({
          type: 'md',
          body: []
        });
      }
      tokens[tokens.length - 1].body.push(line);
    }
  }

  var token;
  while ((token = tokens.shift()) !== undefined) {
    switch (token.type) {
    case 'md':
      retStr += marked(token.body.join('\n'));
      break;
    case 'cgmd':
      // TODO: ここでtokenごとにさばいたHTML文字列を
      retStr += '[cgmd /]';
      break;
    }
  }


  console.log(str);
  console.log('-----------------');

  return retStr;
}

module.exports = CodeGridMarkdown;
