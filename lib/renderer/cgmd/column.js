'use strict';
var util = require('util');

var template = '' +
  '<div class="Column">\n' +
    '%s\n' +
  '</div>\n';

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
