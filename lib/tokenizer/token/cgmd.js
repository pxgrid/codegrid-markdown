'use strict';
const Base_Token = require('./base');
const TOKEN_TYPES = require('../token_types');

const SYNTAX_RE = /^\[(\w+)\]$/;

/**
 * 文法別トークン: CG flavoredなMarkdown
 */
class CGMD_Token extends Base_Token {
  constructor() {
    super(TOKEN_TYPES.CGMD);
  }

  /**
   * [**] ってなってる1行目から、**部を抜いて返す
   *
   * @return {string}
   *   シンタックス名
   */
  getCGSyntax() {
    const res = SYNTAX_RE.exec(this.body[0]);
    return res?.[1] ?? '';
  }

  /**
   * 本文をまるごと返す
   * [**] と [/**] の行はいらなくて、その間が欲しい
   * @return {string}
   *   本文
   */
  getBody() {
    return this.body.slice(1, -1).join('\n');
  }
}

module.exports = CGMD_Token;
