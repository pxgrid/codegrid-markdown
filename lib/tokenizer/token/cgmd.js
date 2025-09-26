'use strict';
const utils = require('../../utils');
const Base_Token = require('./base');
const TOKEN_TYPES = require('../token_types');

const SYNTAX_RE = /^\[(\w+)\]$/;

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
 * [**] ってなってる1行目から、**部を抜いて返す
 *
 * @return {string}
 *   シンタックス名
 *
 */
function getCGSyntax() {
  const res = SYNTAX_RE.exec(this.body[0]);
  return res ? res[1] : '';
}

/**
 * 本文をまるごと返す
 * [**] と [/**] の行はいらなくて、その間が欲しい
 * @return {string}
 *   本文
 *
 */
function getBody() {
  return this.body.slice(1, -1).join('\n');
}
