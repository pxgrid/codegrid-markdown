'use strict';

function Base_Token(type) {
  this.type = type;
  this.body = [];
}

Base_Token.prototype = {
  constructor: Base_Token,
  addBody: addBody
};

module.exports = Base_Token;


/**
 * 行を追加
 *
 * @param {string} line
 *   本文の1行
 *
 */
function addBody(line) {
  this.body.push(line);
}
