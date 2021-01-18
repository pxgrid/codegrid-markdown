'use strict';
var MDRenderer   = require('./renderer/md');
var CGMDRenderer = require('./renderer/cgmd');

/**
 * トークンのレンダラ
 * ふつうのMarkdownと、CGなMarkdownをレンダリングするが、
 * CGなMarkdown部でもふつうのMarkdownは存在するのでそこは同じMarkdownレンダラを使う
 *
 * @param {object} options
 *   markedにそのまま渡すオプション
 *
 */
function Renderer(options) {
  options = options || {};

  // markedのアップデートで初期値が変わったもの
  options.langPrefix = 'lang-';
  options.headerIds = '';

  this.MD   = new MDRenderer(options);
  this.CGMD = new CGMDRenderer(new MDRenderer(options));

  return this;
}

Renderer.prototype = {
  constructor: Renderer,
  render: render
};

module.exports = Renderer;


/**
 * トークンのタイプ別にレンダリングした結果を返す
 *
 * @param {object} token
 *   各トークンのインスタンス
 * @return {string}
 *   HTML文字列
 *
 */
function render(token) {
  if (token.isTypeMD()) {
    return this.MD.renderToken(token);
  }
  if (token.isTypeCGMD()) {
    return this.CGMD.renderToken(token);
  }
}
