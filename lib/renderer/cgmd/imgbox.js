'use strict';
var util   = require('util');
var marked = require('marked');

module.exports = Imgbox;


function Imgbox(options) {
  this.options = options;
}

Imgbox.template = '<div class="Imgbox">' +
                    '%s' +
                  '</div>\n';

Imgbox.prototype = {
  constructor: Imgbox,
  render: render
};

/**
 * cg:imgbox をレンダリングする
 *
 * @param {String} str
 *     Markdown文字列
 *
 */
function render(str) {
  return util.format(this.constructor.template, marked(str, this.options));
}
