'use strict';

/**
 * cg:imgbox をレンダリングする
 *
 * @param {string} str
 *   Markdown文字列
 * @param {object} renderer
 *   Markdownのレンダラ
 *
 */
module.exports = function(str, renderer) {
  return `<figure class="ImgBox">
${renderer.render(str)}
</figure>
`;
};
