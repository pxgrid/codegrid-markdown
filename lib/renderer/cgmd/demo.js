'use strict';
const util = require('util');

const template = '' +
  '<div class="Demo">\n' +
    '%s\n' +
  '</div>\n';

/**
 * cg:demo をレンダリングする
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
