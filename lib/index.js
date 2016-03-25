'use strict';
var tokenizer = require('./tokenizer');
var renderer  = require('./renderer');

var CodeGridMarkdown = function(options) {
  if (!(this instanceof CodeGridMarkdown)) { return new CodeGridMarkdown(options); }
  this._markedOptions = options || {};
  return this;
};

CodeGridMarkdown.prototype = {
  constructor: CodeGridMarkdown,
  render:      render
};


function render(str) {
  str = str || '';

  var options = this._markedOptions;
  var tokens = tokenizer.tokenize(str);

  var retStr = tokens.map(function(token) {
    return renderer.render(token, options);
  }).join('');

  console.log(str);
  console.log('');
  console.log('-------- md -> html -------');
  console.log('');

  return retStr;
}

module.exports = CodeGridMarkdown;
