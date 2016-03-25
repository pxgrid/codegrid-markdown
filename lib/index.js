'use strict';
var tokenizer = require('./tokenizer');
var renderer  = require('./renderer');

/**
 * このパッケージの親玉
 *
 * @param {object} options
 *   現状では、markedにそのまま渡すオプションだが、`renderer`は認めない
 *
 */
var CodeGridMarkdown = function(options) {
  if (!(this instanceof CodeGridMarkdown)) { return new CodeGridMarkdown(options); }
  this._markedOptions = options || {};

  if ('renderer' in options) {
    throw new Error('Can\'t extend renderer, it reserved for cgmd renderer');
  }

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

  var options = this._markedOptions;
  var tokens = tokenizer.tokenize(str);

  var retStr = tokens.map(function(token) {
    return renderer.render(token, options);
  }).join('');

  return retStr;
}

module.exports = CodeGridMarkdown;
