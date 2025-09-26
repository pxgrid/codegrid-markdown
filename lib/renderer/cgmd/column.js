'use strict';

/**
 * cg:column をレンダリングする
 *
 * @param {string} str
 *   Markdown文字列
 * @param {object} renderer
 *   Markdownのレンダラ
 *
 */
module.exports = function(str, renderer) {
  return `<div class="Column">
${renderer.render(str)}
</div>
`;
};
