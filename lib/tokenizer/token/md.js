'use strict';
const Base_Token = require('./base');
const TOKEN_TYPES = require('../token_types');

/**
 * 文法別トークン: ふつうのMarkdown
 */
class MD_Token extends Base_Token {
  constructor() {
    super(TOKEN_TYPES.MD);
  }

  /**
   * 本文をまるごと返す
   *
   * @return {string}
   *   本文
   */
  getBody() {
    return this.body.join('\n');
  }
}

module.exports = MD_Token;
