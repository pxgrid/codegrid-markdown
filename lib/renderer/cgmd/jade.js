'use strict';
var jade = require('jade');

module.exports = Jade;


function Jade(options) {
  this.options = options;
}

Jade.template = '';

Jade.prototype = {
  constructor: Jade,
  render: render
};

/**
 * cg:jade をレンダリングする
 *
 * @param {String} str
 *     Markdown文字列
 *
 */
function render(str) {
  return jade.render(str) + '\n';
}
