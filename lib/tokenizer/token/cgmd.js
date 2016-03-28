'use strict';
var utils = require('../../utils');
var Base_Token = require('./base');
var TOKEN_TYPES = require('../token_types');

/**
 * 文法別トークン: CG flavoredのMarkdown
 *
 */
function CGMD_Token() {
  Base_Token.call(this, TOKEN_TYPES.CGMD);

  return this;
}

CGMD_Token.prototype = {
  constructor: CGMD_Token,
  getBody: getBody
};

utils.inherits(CGMD_Token, Base_Token);
module.exports = CGMD_Token;


/**
 * 本文をまるごと返す
 * [cg:**] と [/cg] の行はいらなくて、その間が欲しい
 * @return {string}
 *   本文
 *
 */
function getBody() {
  return this.body.slice(1, -1).join('\n');
}
