import pug from 'pug';

/**
 * cg:jade をレンダリングする
 *
 * @param {string} str
 *   Jade文字列
 * @param {object} renderer
 *   Markdownのレンダラ
 *   jadeなので使ってない
 *
 */
export default function (str) {
  return pug.render(str);
}
