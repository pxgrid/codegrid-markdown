import { marked } from 'marked';

// なんか増えたらココに追記
import code from './md/code.js';

// CJK約物（）など）の直後にある closing ** が認識されない CommonMark 由来の問題を修正する。
// emStrongRDelimAst の group1 lookahead に \p{L} を追加し、
// 約物 + ** + 文字（CJK含む）の並びも closing delimiter と見なすようにする。
marked.use({
  tokenizer: {
    emStrong(src, maskedSrc, prevChar = '') {
      if (!this._cjkFixed) {
        const orig = this.rules.inline.emStrongRDelimAst;
        this.rules.inline.emStrongRDelimAst = new RegExp(
          orig.source.replace('(?=[\\s]|$)', '(?=[\\s\\p{L}]|$)'),
          orig.flags
        );
        this._cjkFixed = true;
      }
      return false;
    }
  }
});

const renderFunc = {
  code,
};

/**
 * ふつうのMarkdownをレンダリングする
 * `renderFunc`に定義されてるものを拡張してある
 */
class MDRenderer {
  /**
   * @param {object} options
   *   markedにそのまま渡すオプション
   */
  constructor(options = {}) {
    this.options = options;

    this.options.renderer = new marked.Renderer();

    Object.keys(renderFunc).forEach((key) => {
      this.options.renderer[key] = renderFunc[key];
    });
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
    return marked(token.getBody(), this.options);
  }

  /**
   * md文字列をレンダリングした結果を返す
   *
   * @param {string} md
   *   md文字列
   * @return {string}
   *   HTML文字列
   */
  render(md) {
    return marked(md, this.options);
  }
}

export default MDRenderer;
