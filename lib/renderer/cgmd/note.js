'use strict';
var util = require('util');

var template = '' +
  '<aside class="cgmd-Note">\n' +
    '<section class="cgmd-Note_Inner">' +
    '%s\n' +
    '</section>' +
  '</aside>\n';

/**
 * cg:note をレンダリングする
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
