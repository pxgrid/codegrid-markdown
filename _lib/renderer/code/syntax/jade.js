'use strict';
var jade   = require('jade');

/**
 * cg:jade をレンダリングする
 *
 * @param {String} code
 *     Jade文字列
 *
 */
module.exports = function(code) {
  return jade.render(code) + '\n';
};
