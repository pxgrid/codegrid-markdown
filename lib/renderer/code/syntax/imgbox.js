'use strict';
var util   = require('util');
var marked = require('marked');

var template = '<div class="Imgbox">' +
                 '%s' +
               '</div>\n';

/**
 * cg:imgbox をレンダリングする
 *
 * @param {String} code
 *     Markdown文字列
 *
 */
module.exports = function(code) {
  return util.format(template, marked(code));
};
