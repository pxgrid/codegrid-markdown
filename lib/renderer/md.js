'use strict';
var { marked } = require('marked');

// なんか増えたらココに追記
var renderFunc = {
  code: require('./md/code')
};

/**
 * ふつうのMarkdownをレンダリングする
 * `renderFunc`に定義されてるものを拡張してある
 *
 * @param {object} options
 *   markedにそのまま渡すオプション
 *
 */
function MDRenderer(options) {
  this.options = options || {};

  this.options.renderer = new marked.Renderer();
  // markedのアップデートで初期値が変わったもの
  this.options.langPrefix = 'lang-';
  this.options.headerIds = '';

  Object.keys(renderFunc).forEach(function(key) {
    this.options.renderer[key] = renderFunc[key];
  }, this);

  return this;
}

MDRenderer.prototype = {
  constructor: MDRenderer,
  renderToken: renderToken,
  render:      render
};

module.exports = MDRenderer;


/**
 * トークンをレンダリングした結果を返す
 *
 * @param {object} token
 *   各トークンのインスタンス
 * @return {string}
 *   HTML文字列
 *
 */
function renderToken(token) {
  return marked(token.getBody(), this.options);
}

/**
 * md文字列をレンダリングした結果を返す
 *
 * @param {string} md
 *   md文字列
 * @return {string}
 *   HTML文字列
 *
 */
function render(md) {
  return marked(md, this.options);
}
