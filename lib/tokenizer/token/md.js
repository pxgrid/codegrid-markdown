'use strict';
var utils = require('../../utils');
var Base_Token = require('./base');
var TOKEN_TYPES = require('../token_types');

/**
 * 文法別トークン: ふつうのMarkdown
 *
 */
function MD_Token() {
  Base_Token.call(this, TOKEN_TYPES.MD);

  return this;
}

MD_Token.prototype = {
  constructor: MD_Token,
  getBody:     getBody
};

utils.inherits(MD_Token, Base_Token);
module.exports = MD_Token;


/**
 * 本文をまるごと返す
 *
 * @return {string}
 *   本文
 *
 */
function getBody() {
  return this.body.join('\n');
}
