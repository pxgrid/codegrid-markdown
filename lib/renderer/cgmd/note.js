/**
 * cg:note をレンダリングする
 *
 * @param {string} str
 *   Markdown文字列
 * @param {object} renderer
 *   Markdownのレンダラ
 *
 */
export default function(str, renderer) {
  return `
<div class="Note">
${renderer.render(str)}
</div>
`.trimStart();
}
