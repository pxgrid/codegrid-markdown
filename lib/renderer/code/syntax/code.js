'use strict';
var util   = require('util');
var marked = require('marked');
var renderer = new marked.Renderer();

/**
 * preの出力を変える
 * @param {String} code
 *     preで囲むコード文字列
 * @param {String} lang
 *     そのコードの言語
 * @refer https://github.com/chjj/marked/blob/master/lib/marked.js#L764
 */
renderer.code = function (code, lang) {
  //タグをエスケープする
  function _escape(html, encode) {
    return html
      .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  };
  var tmpl = '<pre class="code %s">%s\n</pre>\n';
  return util.format(tmpl, lang, _escape(code, true));
};

//CodeGridのHTML用テンプレート
var template = '<div class="Code">\n' +
                  '<div class="Code__title">%s</div>\n' +
                  '<div class="Code__body">\n'+
                    '%s' +
                  '</div>\n' +
               '</div>\n';

/**
 * cg:code:html をレンダリングする
 *
 * @param {String} code
 *     Markdown文字列
 * @param {String} lang
 *     ```の後に指定された言語
 *
 */
module.exports = function(code, lang) {
  var _code;
  var codeLang = '';
  var codeTitle = '';
  var codeBody = '';
  var hasTitle = false;
  //言語を取得する
  codeLang = lang.split(':')[2] || '';
  //行ごとに分割する
  _code = code.split('\n');
  //1行目のタイトルを取得する（あれば）
  if (/^#/.test(_code[0])) {
    codeTitle = _code.shift().replace(/#\s+(.*)/,'$1');
  } else {
    codeTitle = codeLang.toUpperCase();
  }
  //残りをコードフェンスで囲む
  codeBody = '```'+codeLang+'\n'+ _code.join('\n')+ '\n```';
  return util.format(template, codeTitle, marked(codeBody, { 'renderer': renderer }));
};
