'use strict';
var marked = require('marked');

var TOKEN_TYPES = require('./tokenizer').TOKEN_TYPES;

var MDRenderer   = require('./renderer/md');
var CGMDRenderer = require('./renderer/cgmd');

module.exports = {
  render: render
};


function render(token, options) {
  var retStr = '';

  var renderer = new marked.Renderer();
  renderer.code = function(code, lang, escaped) {
    if (lang) {
      var langArr = lang.split('#');
      if (langArr.length === 1) {
        return marked.Renderer.prototype.code.apply(this, [code, lang, escaped]);
      } else {
        return '<div class="Code">\n' +
                 '<div class="Code__title">' + langArr[1] + '</div>\n' +
                 '<div class="Code__body">\n' +
                   marked.Renderer.prototype.code.apply(this, [code, langArr[0], escaped]) + '\n' +
                 '</div>\n' +
               '</div>\n';
      }
    } else {
      return marked.Renderer.prototype.code.apply(this, [code, lang, escaped]);
    }
  };
  options.renderer = renderer;

  switch (token.type) {
  case TOKEN_TYPES.MD:
    retStr += MDRenderer.render(token, options);
    break;
  case TOKEN_TYPES.CGMD:
    retStr += CGMDRenderer.render(token, options);
    break;
  }

  return retStr;
}
