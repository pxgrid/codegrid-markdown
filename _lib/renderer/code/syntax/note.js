'use strict';
var util   = require('util');
var marked = require('marked');

var template = '<div class="Note">' +
                 '%s' +
               '</div>\n';

/**
 * cg:note をレンダリングする
 *
 * @param {String} code
 *     Markdown文字列
 *
 */
module.exports = function(code) {
  return util.format(template, marked(code));
};
