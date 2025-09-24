'use strict';
var cheerio = require('cheerio');

var transformFunc = {
  demo: require("./transformer/demo"),
  tree: require("./transformer/tree"),
};

/**
 * md -> html -> transformed html
 * 文字列操作で辛くなってくる処理はこっちで
 *
 */
var Transformer = {
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
  var $ = cheerio.load(htmlStr, { decodeEntities: false }, false);

  Object.keys(transformFunc).forEach(function(key) {
    transformFunc[key]($);
  });

  return $.html();
}

module.exports = Transformer;
