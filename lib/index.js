'use strict';
var marked   = require('marked');
var extend   = require('util-extend');
var renderer = require('./renderer');

/**
 * CodeGrid用のMarkdownを扱うクラス
 *
 * @class CodeGridMarkdown
 * @param {Object} [options]
 *     markedに渡すオプション
 *
 */
var CodeGridMarkdown = function(options) {
  if (!(this instanceof CodeGridMarkdown)) { return new CodeGridMarkdown(options); }
  return this._initialize.call(this, options);
};

CodeGridMarkdown.prototype = {
  constructor: CodeGridMarkdown,
  // private
  _initialize: _initialize,
  // public
  render:      render
};

/**
 * オプションを拡張して初期化する
 *
 * @param {Object} [options]
 *     markedに渡すオプション
 *
 */
function _initialize(options) {
  options = options || {};
  this._markedOptions = extend(options, {
    // 拡張したrendererを使う
    renderer: renderer
  });
  return this;
}

/**
 * Markdown文字列をHTML文字列に変換する
 *
 * @param {String} str
 *     Markdown文字列
 *
 */
function render(str) {
  str = str || '';
  return marked(str, this._markedOptions);
}

module.exports = CodeGridMarkdown;
