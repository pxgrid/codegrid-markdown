'use strict';

/**
 * cg:demo をレンダリングする
 *
 * @param {string} str
 *   Markdown文字列
 * @param {object} renderer
 *   Markdownのレンダラ
 *
 */
module.exports = function(str, renderer) {
  return `<div class="Demo">
${renderer.render(str)}
</div>
`;
};
