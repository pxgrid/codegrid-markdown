'use strict';
var util   = require('util');
var marked = require('marked');

var origCodeRender = marked.Renderer.prototype.code;

var template = '' +
  '<div class="CG2-livecode">\n' +
    '<header class="CG2-livecode__header">\n' +
      '<div class="CG2-livecode__label">%s</div>\n' +
    '</header>\n' +
    '<div class="CG2-livecode__body">%s</div>\n' +
  '</div>\n';

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
 * @param {string} lang
 * @param {string} escaped
 * @return {string}
 *   HTML文字列
 *
 */
module.exports = function(code, lang, escaped) {
  // そもそも言語指定ないやつ
  if (!lang) {
    return origCodeRender.apply(this, [code, lang, escaped]);
  }

  var langArr = lang.split('#');
  // 言語の指定はあったが、タイトルがない = 今まで通り
  if (langArr.length === 1 || langArr[1].length === 0) {
    return origCodeRender.apply(this, [code, langArr[0], escaped]);
  }

  // 言語の指定もタイトル指定もちゃんとあるやつ
  return util.format(
    template,
    langArr[1], // タイトル
    origCodeRender.apply(this, [code, langArr[0], escaped]) // コード本体
  );
};
