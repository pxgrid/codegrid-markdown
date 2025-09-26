import { marked } from 'marked';

// なんか増えたらココに追記
import code from './md/code.js';

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
    // markedのアップデートで初期値が変わったもの
    this.options.langPrefix = 'lang-';
    this.options.headerIds = '';

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
