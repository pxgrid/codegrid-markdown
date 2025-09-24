"use strict";
var pug = require("pug");

/**
 * cg:jade をレンダリングする
 *
 * @param {string} str
 *   Jade文字列
 * @param {object} renderer
 *   Markdownのレンダラ
 *   jadeなので使ってない
 *
 */
module.exports = function (str) {
  return pug.render(str);
};
