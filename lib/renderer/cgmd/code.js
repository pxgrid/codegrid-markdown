'use strict';
var util  = require('util');
var utils = require('../../utils');

module.exports = Code;


function Code(options) {
  this.options = options;
}

Code.template = '<div class="Code">\n' +
                   '<div class="Code__title">%s</div>\n' +
                   '<div class="Code__body">\n'+
                     '%s' +
                   '</div>\n' +
                '</div>\n';

Code.prototype = {
  constructor: Code,
  render: render
};

/**
 * cg:code:html をレンダリングする
 * アウトプットのHTMLだけでなく、
 * 中のpreタグにも独自のクラスをつけたりと、他のと違って処理が多い
 *
 * @param {String} str
 *     Markdown文字列
 * @param {String} lang
 *     ```の後に指定された言語
 *
 */
function render(str, options) {
  var codeArr = str.split('\n');
  var codeLang = options[0] || '';

  // 1行目からタイトルを取得する（あれば）
  var codeTitle = '';
  // 1行目の1文字目が # からはじまってたらタイトルとして採用する
  if (codeArr[0][0] === '#') {
    codeTitle = codeArr.shift().slice(1).trim();
  }
  // それ以外はlangを大文字にして使う
  else {
    codeTitle = codeLang.toUpperCase();
  }

  // 残りをコードフェンスで囲む
  var codeMd = '```' + codeLang + '\n' +
                   codeArr.join('\n') + '\n' +
               '```';
  var codeBody = utils.getCodeBodyWithCustomCodeRenderer(codeMd);

  return util.format(this.constructor.template, codeTitle, codeBody);
}
