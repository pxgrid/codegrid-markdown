'use strict';
var util   = require('util');
var marked = require('marked');

var template = '<div class="Demo">' +
                 '%s' +
               '</div>\n';

/**
 * cg:demo をレンダリングする
 *
 * @param {String} code
 *     Markdown文字列
 *
 */
module.exports = function(code) {
  return util.format(template, marked(code));
};
