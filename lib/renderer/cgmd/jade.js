'use strict';
var jade = require('jade');

/**
 * cg:jade をレンダリングする
 *
 * @param {string} str
 *   Markdown文字列
 * @param {object} renderer
 *   Markdownのレンダラ
 *   jadeなので使ってない
 *
 */
module.exports = function(str) {
  return jade.render(str);
};
