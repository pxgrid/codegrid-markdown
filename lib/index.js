'use strict';
const tokenizer = require('./tokenizer');
const Renderer  = require('./renderer');
const transformer = require('./transformer');

/**
 * このパッケージの親玉
 *
 * @param {object} options
 *   現状では、markedにそのまま渡すオプションだが、`renderer`は認めない
 *
 */
const CodeGridMarkdown = function(options) {
  options = options || {};

  if ('renderer' in options) {
    throw new Error('Can\'t extend renderer, it reserved for CGMD renderer.');
  }

  this.renderer = new Renderer(options);

  return this;
};

CodeGridMarkdown.prototype = {
  constructor: CodeGridMarkdown,
  render:      render
};

/**
 * md -> htmlの根っこの処理
 *
 * @param {string} str
 *   Markdownであろう文字列
 *
 */
function render(str) {
  if (!str || str.length === 0) { return str; }

  const tokens = tokenizer.tokenize(str);

  const retStr = tokens.map(function(token) {
    return this.renderer.render(token);
  }, this).join('');

  return transformer.transform(retStr);
}

module.exports = CodeGridMarkdown;
