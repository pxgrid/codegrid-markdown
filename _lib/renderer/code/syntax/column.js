'use strict';
var util   = require('util');
var marked = require('marked');

var template = '<div class="Column">' +
                 '%s' +
               '</div>\n';

/**
 * cg:column をレンダリングする
 *
 * @param {String} code
 *     Markdown文字列
 *
 */
module.exports = function(code) {
  return util.format(template, marked(code));
};
