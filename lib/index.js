'use strict';
const tokenizer = require('./tokenizer');
const Renderer  = require('./renderer');
const transformer = require('./transformer');

/**
 * このパッケージの親玉
 */
class CodeGridMarkdown {
  /**
   * @param {object} options
   *   現状では、markedにそのまま渡すオプションだが、`renderer`は認めない
   */
  constructor(options = {}) {
    if ('renderer' in options) {
      throw new Error('Can\'t extend renderer, it reserved for CGMD renderer.');
    }

    this.renderer = new Renderer(options);
  }

  /**
   * md -> htmlの根っこの処理
   *
   * @param {string} str
   *   Markdownであろう文字列
   */
  render(str) {
    if (!str?.length) { return str; }

    const tokens = tokenizer.tokenize(str);

    const retStr = tokens.map((token) => this.renderer.render(token)).join('');

    return transformer.transform(retStr);
  }
}

module.exports = CodeGridMarkdown;
