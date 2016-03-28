'use strict';
var TOKEN_TYPES = require('./tokenizer/token_types');
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
  var retStr;
  switch (token.type) {
  case TOKEN_TYPES.MD:
    retStr = this.MD.renderToken(token);
    break;
  case TOKEN_TYPES.CGMD:
    retStr = this.CGMD.renderToken(token);
    break;
  }

  return retStr;
}
