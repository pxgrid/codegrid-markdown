'use strict';
var jsdom = require('jsdom').jsdom;

var transformFunc = {
  demo: require('./transformer/demo')
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
  var html = jsdom(htmlStr);
  var doc = html.defaultView.document;

  Object.keys(transformFunc).forEach(function(key) {
    transformFunc[key](doc);
  });

  return doc.body.innerHTML;
}

module.exports = Transformer;
