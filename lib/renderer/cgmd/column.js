'use strict';
var util   = require('util');
var marked = require('marked');

module.exports = Column;


function Column(options) {
  this.options = options;
}

Column.template = '<div class="Column">' +
                    '%s' +
                  '</div>\n';

Column.prototype = {
  constructor: Column,
  render: render
};

/**
 * cg:column をレンダリングする
 *
 * @param {String} str
 *     Markdown文字列
 *
 */
function render(str) {
  return util.format(this.constructor.template, marked(str, this.options));
}
