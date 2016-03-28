'use strict';
var utils = require('../../utils');
var Base_Token = require('./base');
var TOKEN_TYPES = require('../token_types');

/**
 * 文法別トークン: CG flavoredなMarkdown
 *
 */
function CGMD_Token() {
  Base_Token.call(this, TOKEN_TYPES.CGMD);

  return this;
}

CGMD_Token.prototype = {
  constructor: CGMD_Token,
  getCGSyntax: getCGSyntax,
  getBody:     getBody
};

utils.inherits(CGMD_Token, Base_Token);
module.exports = CGMD_Token;


/**
 * [cg:**] ってなってる1行目から、**部を抜いて返す
 *
 * @return {string}
 *   シンタックス名
 *
 */
function getCGSyntax() {
  var cap = utils.captureAllRe('(?:\:([a-z]+))', this.body[0]);
  return cap[0];
}

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
