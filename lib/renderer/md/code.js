'use strict';
var util   = require('util');
var marked = require('marked');

var origCodeRender = marked.Renderer.prototype.code;

var template = '' +
  '<div class="Code">\n' +
    '<div class="Code__title">%s</div>\n' +
    '<div class="Code__body">%s</div>\n' +
  '</div>\n';

module.exports = function(code, lang, escaped) {
  // そもそも言語指定ないやつ
  if (!lang) {
    return origCodeRender.apply(this, arguments);
  }

  var langArr = lang.split('#');
  // 言語の指定はあったが、タイトルがない = 今まで通り
  if (langArr.length === 1) {
    return origCodeRender.apply(this, arguments);
  }

  // 言語の指定もタイトル指定もあるやつ
  return util.format(
    template,
    langArr[1], // タイトル
    origCodeRender.apply(this, [code, langArr[0], escaped]) // コード本体
  );
};
