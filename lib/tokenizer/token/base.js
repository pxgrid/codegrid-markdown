'use strict';
const TOKEN_TYPES = require('../token_types');

class Base_Token {
  constructor(type) {
    if (!type) {
      throw new Error('Token type is not defined!');
    }
    this.type = type;
    this.body = [];
  }

  /**
   * 行を追加
   *
   * @param {string} line
   *   本文の1行
   */
  addBody(line) {
    this.body.push(line);
  }

  /**
   * ふつうのMarkdownのトークンか
   */
  isTypeMD() {
    return this.type === TOKEN_TYPES.MD;
  }

  /**
   * CGなMarkdownのトークンか
   */
  isTypeCGMD() {
    return this.type === TOKEN_TYPES.CGMD;
  }
}

module.exports = Base_Token;
