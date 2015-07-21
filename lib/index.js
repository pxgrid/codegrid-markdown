'use strict';
var marked   = require('marked');
var extend   = require('util-extend');
var renderer = require('./renderer');

var CodeGridMarkdown = function(options) {
  if (!(this instanceof CodeGridMarkdown)) { return new CodeGridMarkdown(options); }
  return this._initialize.call(this, options);
};

CodeGridMarkdown.prototype = {
  constructor: CodeGridMarkdown,
  _initialize: _initialize,
  render:      render
};

function _initialize(options) {
  this._markedOptions = extend(options, {
    // 拡張したrendererを使う
    renderer: renderer
  });
  return this;
}

function render(str) {
  return marked(str, this._markedOptions);
}

module.exports = CodeGridMarkdown;
