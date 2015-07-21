'use strict';
var marked = require('marked');

var codeRenderFunc = {
  note:   require('./syntax/note'),
  column: require('./syntax/column'),
  imgbox: require('./syntax/imgbox'),
  demo:   require('./syntax/demo'),
  jade:   require('./syntax/jade'),
  orig:   marked.Renderer.prototype.code
};

var codeRenderer = function(code, lang) {
  var cgLang = /^cg: ?(\w+)$/.exec(lang);
  var renderer = null;

  // cg:foo な独自ブロックではないcodeブロック
  if (cgLang === null) {
    renderer = codeRenderFunc['orig'];
  }
  // cg:foo な独自ブロックで、定義もされてるやつ
  else if (cgLang[1] in codeRenderFunc) {
    renderer = codeRenderFunc[cgLang[1]];
  }
  // cg:foo な独自ブロックだが、定義されてないやつ
  else {
    console.warn('Syntax %s is not defined!', cgLang[1]);
    renderer = codeRenderFunc['orig'];
  }

  return renderer.apply(this, arguments);
};

module.exports = codeRenderer;
