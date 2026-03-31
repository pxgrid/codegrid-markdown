import Base_Token from './base.js';
import TOKEN_TYPES from '../token_types.js';

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

export default MD_Token;
