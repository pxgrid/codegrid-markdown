'use strict';
var util   = require('util');
var marked = require('marked');

module.exports = Demo;


function Demo(options) {
  this.options = options;
}

Demo.template = '<div class="Demo">' +
                  '%s' +
                '</div>\n';

Demo.prototype = {
  constructor: Demo,
  render: render
};

/**
 * cg:demo をレンダリングする
 *
 * @param {String} str
 *     Markdown文字列
 *
 */
function render(str) {
  return util.format(this.constructor.template, marked(str, this.options));
}
