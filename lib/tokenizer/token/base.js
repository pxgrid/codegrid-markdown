'use strict';
var TOKEN_TYPES = require('../token_types');

function Base_Token(type) {
  if (!type) {
    throw new Error('Token type is not defined!');
  }
  this.type = type;
  this.body = [];
}

Base_Token.prototype = {
  constructor: Base_Token,
  addBody:     addBody,
  isTypeMD:    isTypeMD,
  isTypeCGMD:  isTypeCGMD
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

/**
 * ふつうのMarkdownのトークンか
 *
 * @return {boolean}
 *
 */
function isTypeMD() {
  return this.type === TOKEN_TYPES.MD;
}

/**
 * CGなMarkdownのトークンか
 *
 * @return {boolean}
 *
 */
function isTypeCGMD() {
  return this.type === TOKEN_TYPES.CGMD;
}
