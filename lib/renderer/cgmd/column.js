'use strict';
var util = require('util');

var template = '' +
  '<aside class="cgmd-Column">\n' +
    '<section class="cgmd-Column_Inner">\n' +
    '%s\n' +
    '</section>\n' +
  '</aside>\n';

/**
 * cg:column をレンダリングする
 *
 * @param {string} str
 *   Markdown文字列
 * @param {object} renderer
 *   Markdownのレンダラ
 *
 */
module.exports = function(str, renderer) {
  return util.format(template, renderer.render(str));
};
