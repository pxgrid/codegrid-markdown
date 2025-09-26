"use strict";

/**
 * cg:tree をレンダリングする
 *
 * @param {string} str
 *   Markdown文字列
 * @param {object} renderer
 *   Markdownのレンダラ
 *
 */
module.exports = function (str, renderer) {
  return `
<div class="Tree">
${renderer.render(str)}
</div>
`.trimStart();
};
