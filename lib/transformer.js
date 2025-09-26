'use strict';
const cheerio = require('cheerio');

const transformFunc = {
  demo: require("./transformer/demo"),
  tree: require("./transformer/tree"),
};

/**
 * md -> html -> transformed html
 * 文字列操作で辛くなってくる処理はこっちで
 *
 */
const Transformer = {
  transform: transform
};

/**
 * トランスフォームする
 *
 * @param {string} htmlStr
 *   HTMLであろう文字列
 * @return {htmlStr}
 *   変換後のHTMLであろう文字列
 */
function transform(htmlStr) {
  const $ = cheerio.load(htmlStr, { decodeEntities: false }, false);

  Object.keys(transformFunc).forEach((key) => {
    transformFunc[key]($);
  });

  return $.html();
}

module.exports = Transformer;
