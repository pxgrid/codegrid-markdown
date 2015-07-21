'use strict';
var util     = require('util');
var marked   = require('marked');
var renderer = require('./renderer');

var CodeGridMarkdown = function(options) {
  return this._initialize.call(this, options);
};

CodeGridMarkdown.prototype._initialize = function(options) {
  // TODO: _extendをなんか別のに
  this._markedOptions = util._extend(options, {
    // 拡張したrendererを使う
    renderer: renderer
  });
  return this;
};
CodeGridMarkdown.prototype.render = function(str) {
  return marked(str, this._markedOptions);
};

module.exports = CodeGridMarkdown;
