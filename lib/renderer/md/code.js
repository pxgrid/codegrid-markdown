'use strict';
var util   = require('util');
var marked = require('marked');

var origCodeRender = marked.Renderer.prototype.code;

var template = '' +
  '<figure class="cgmd-Code">\n' +
    '<div class="cgmd-Code_Inner">\n' +
      '<div class="cgmd-Code_Body">%s</div>\n' +
    '</div>\n' +
  '</figure>\n';

var templateWithLang = '' +
  '<figure class="cgmd-Code">\n' +
    '<div class="cgmd-Code_Inner">\n' +
      '<figcaption class="cgmd-Code_Header">\n' +
        '<span class="cgmd-Code_Lang">%s</span>\n' +
      '</figcaption>\n' +
      '<div class="cgmd-Code_Body">%s</div>\n' +
    '</div>\n' +
  '</figure>\n';

var templateWithLangAndTitle = '' +
  '<figure class="cgmd-Code">\n' +
    '<div class="cgmd-Code_Inner">\n' +
      '<figcaption class="cgmd-Code_Header">\n' +
        '<span class="cgmd-Code_Title">%s</span>\n' +
        '<span class="cgmd-Code_Lang">%s</span>\n' +
      '</figcaption>\n' +
      '<div class="cgmd-Code_Body">%s</div>\n' +
    '</div>\n' +
  '</figure>\n';

/**
 * `code`ブロックの拡張
 *
 * たとえば、
 * ``` 言語指定なし ```
 * とか
 * ```html 言語指定あり ```
 * とか
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
    return util.format(
      template,
      origCodeRender.apply(this, [code, lang, escaped]) // コード本体
    );
  }

  var langArr = lang.split('#');
  // 言語の指定はあったが、タイトルがない = 今まで通り
  if (langArr.length === 1 || langArr[1].length === 0) {
    return util.format(
      templateWithLang,
      langArr[0], // 言語
      origCodeRender.apply(this, [code, langArr[0], escaped]) // コード本体
    );
  }

  // 言語の指定もタイトル指定もちゃんとあるやつ
  return util.format(
    templateWithLangAndTitle,
    langArr[1], // タイトル
    langArr[0], // 言語
    origCodeRender.apply(this, [code, langArr[0], escaped]) // コード本体
  );
};
