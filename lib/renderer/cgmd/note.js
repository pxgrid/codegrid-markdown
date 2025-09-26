'use strict';

/**
 * cg:note をレンダリングする
 *
 * @param {string} str
 *   Markdown文字列
 * @param {object} renderer
 *   Markdownのレンダラ
 *
 */
module.exports = function(str, renderer) {
  return `<div class="Note">
${renderer.render(str)}
</div>
`;
};
