'use strict';

// mdレベルでの独自記法が増えたらココを増やす
const renderFunc = {
  tree: require('./cgmd/tree'),
  note: require('./cgmd/note'),
  column: require('./cgmd/column'),
  imgbox: require('./cgmd/imgbox'),
  demo: require('./cgmd/demo'),
  jade: require('./cgmd/jade')
};

/**
 * CG flavored Markdownをレンダリングする
 * `renderFunc`に定義されてるものを拡張してある
 */
class CGMDRenderer {
  /**
   * @param {object} MDRenderer
   *   CGな中でもふつうのMarkdown部分をレンダリングするレンダラ
   */
  constructor(MDRenderer) {
    this.MDRenderer = MDRenderer;
  }

  /**
   * トークンをレンダリングした結果を返す
   *
   * @param {object} token
   *   各トークンのインスタンス
   * @return {string}
   *   HTML文字列
   */
  renderToken(token) {
    const syntax = token.getCGSyntax();
    if (syntax in renderFunc === false) {
      throw new Error('Undefined syntax: ' + syntax);
    }

    return renderFunc[syntax](token.getBody(), this.MDRenderer);
  }
}

module.exports = CGMDRenderer;
