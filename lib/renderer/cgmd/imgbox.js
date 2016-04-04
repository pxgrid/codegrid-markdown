'use strict';
var util = require('util');

var template = '' +
  '<div class="Imgbox">\n' +
    '%s\n' +
  '</div>\n';

/**
 * cg:imgbox をレンダリングする
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
