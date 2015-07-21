'use strict';
var marked = require('marked');

var codeRenderFunc = {
  note: require('./note'),
  // TODO: 以下をファイルに分けて、中身を実装する
  column: function() {
    return '<div>columnだよ</div>';
  },
  imgbox: function() {
    return '<div>imgboxだよ</div>';
  },
  demo: function() {
    return '<div>demoだよ</div>';
  },
  jade: function() {
    return '<div>jadeだよ</div>';
  },
  orig: marked.Renderer.prototype.code
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
    renderer = codeRenderFunc['orig'];
  }

  return renderer.apply(this, arguments);
};

module.exports = codeRenderer;
