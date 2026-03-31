import { marked } from 'marked';

const origCodeRender = marked.Renderer.prototype.code;

const escapeHtml = (str) =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const renderLivecodeSection = (title, codeHtml) => `
<section class="CG2-livecode">
<header class="CG2-livecode__header">
<div class="CG2-livecode__label">${escapeHtml(title)}</div>
</header>
<div class="CG2-livecode__body">${codeHtml}</div>
</section>
`.trimStart();

/**
 * `code`ブロックの拡張
 *
 * たとえば、
 * ``` 言語指定なし ```
 * とか
 * ```html 言語指定あり ```
 * みたいなやつは、拡張しないふつうの`marked`でレンダリングして返す
 *
 * ```html#たいとる 言語指定とタイトル指定 ```
 * みたいにすると、拡張したやつでレンダリングして返す
 *
 * @param {string} code
 *   コード文字列
 * @param {string} lang
 *   言語指定文字列（`lang#タイトル` の形式を取る場合もある）
 * @param {boolean} escaped
 * @return {string}
 *   HTML文字列
 *
 */
export default function(code, lang, escaped) {
  // そもそも言語指定ないやつ
  if (!lang) {
    return origCodeRender.call(this, code, lang, escaped);
  }

  const langArr = lang.split('#').map((t) => t.trim());
  // 言語の指定はあったが、タイトルがない = 今まで通り
  if (langArr.length === 1 || langArr[1].length === 0) {
    return origCodeRender.call(this, code, langArr[0], escaped);
  }

  // 言語の指定もタイトル指定もちゃんとあるやつ
  return renderLivecodeSection(
    langArr[1], // タイトル
    origCodeRender.call(this, code, langArr[0], escaped) // コード本体
  );
}
