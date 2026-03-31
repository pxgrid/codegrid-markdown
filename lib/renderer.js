import MDRenderer from './renderer/md.js';
import CGMDRenderer from './renderer/cgmd.js';

/**
 * トークンのレンダラ
 * ふつうのMarkdownと、CGなMarkdownをレンダリングするが、
 * CGなMarkdown部でもふつうのMarkdownは存在するのでそこは同じMarkdownレンダラを使う
 */
class Renderer {
  /**
   * @param {object} options
   *   markedにそのまま渡すオプション
   */
  constructor(options = {}) {
    this.MD   = new MDRenderer(options);
    this.CGMD = new CGMDRenderer(new MDRenderer(options));
  }

  /**
   * トークンのタイプ別にレンダリングした結果を返す
   *
   * @param {object} token
   *   各トークンのインスタンス
   * @return {string}
   *   HTML文字列
   */
  render(token) {
    if (token.isTypeMD()) {
      return this.MD.renderToken(token);
    }
    if (token.isTypeCGMD()) {
      return this.CGMD.renderToken(token);
    }

    return undefined;
  }
}

export default Renderer;
