'use strict';
var util = require('util');

var template = '' +
  '<figure class="ImgBox">\n' +
    '%s\n' +
  '</figure>\n';

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
