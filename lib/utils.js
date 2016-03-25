'use strict';
var util   = require('util');
var marked = require('marked');

module.exports = {
  captureAllRe: captureAllRe,

  escapeHtml: escapeHtml,
  getCodeBodyWithCustomCodeRenderer: getCodeBodyWithCustomCodeRenderer
};


function captureAllRe(reStr, str) {
  var re = new RegExp(reStr, 'g');
  var res, cap = [];
  while ((res = re.exec(str)) !== null) {
    cap.push(res[1]);
  }

  return cap;
}

/**
 * タグのエスケープ
 * @refer https://github.com/chjj/marked/blob/master/lib/marked.js#L764
 *
 * @param {String} html
 *     (HTML)文字列
 * @param {Boolean} encode
 *     エンコードされてるかどうか
 * @return {String}
 *
 */
function escapeHtml(html, encode) {
  return html
    .replace(encode ? /&/g : /&(?!#?\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * コードフェンスをpreタグで出してくれるカスタムレンダラを作って、
 * それでmdをパースした文字列を返す
 * さらにそのpreタグには、コードの種類をクラス名としてつける
 *
 * @param {String} md
 *     Markdown文字列
 * @return {String}
 *
 */
function getCodeBodyWithCustomCodeRenderer(md) {
  var renderer = new marked.Renderer();

  renderer.code = function(code, lang) {
    lang = lang || ''; // こうしないと undefined って入っちゃう
    var template = '<pre class="code %s">%s\n</pre>\n';
    return util.format(template, lang, escapeHtml(code, true));
  };

  return marked(md, { renderer: renderer });
}
