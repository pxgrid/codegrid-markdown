import tree from './cgmd/tree.js';
import note from './cgmd/note.js';
import column from './cgmd/column.js';
import imgbox from './cgmd/imgbox.js';
import demo from './cgmd/demo.js';
import CGMD_SYNTAXES from '../cgmd_syntaxes.js';

// mdレベルでの独自記法が増えたらココを増やす
const renderFunc = {
  tree,
  note,
  column,
  imgbox,
  demo,
  jade
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
    if (CGMD_SYNTAXES.includes(syntax) === false) {
      throw new Error('Undefined syntax: ' + syntax);
    }

    const renderer = renderFunc[syntax];
    if (typeof renderer !== 'function') {
      throw new Error('Renderer not implemented for syntax: ' + syntax);
    }

    return renderer(token.getBody(), this.MDRenderer);
  }
}

export default CGMDRenderer;
