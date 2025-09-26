import * as cheerio from 'cheerio';
import demo from './transformer/demo.js';
import tree from './transformer/tree.js';

const transformFunc = {
  demo,
  tree,
};

/**
 * md -> html -> transformed html
 * 文字列操作で辛くなってくる処理はこっちで
 *
 */
const Transformer = {
  transform: transform
};

/**
 * トランスフォームする
 *
 * @param {string} htmlStr
 *   HTMLであろう文字列
 * @return {htmlStr}
 *   変換後のHTMLであろう文字列
 */
function transform(htmlStr) {
  const $ = cheerio.load(htmlStr, { decodeEntities: false }, false);

  Object.keys(transformFunc).forEach((key) => {
    transformFunc[key]($);
  });

  return $.html();
}

export default Transformer;
