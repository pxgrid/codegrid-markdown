'use strict';
var util = require('util');

var marked   = require('marked');
var renderer = new marked.Renderer();

var CodeGridMarkdown = module.exports = function(options) {
  return this._initialize.call(this, options);
};

var codeRenderer = {
  note: function(code) {
    return '<div class="Note">' + marked(code) + '</div>';
  },
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

renderer.code = function(code, lang) {
  var cgLang = /^cg: ?(\w+)$/.exec(lang);
  var renderer = null;

  // cg:foo な独自ブロックではないcodeブロック
  if (cgLang === null) {
    renderer = codeRenderer['orig'];
  }
  // cg:foo な独自ブロックで、定義もされてるやつ
  else if (cgLang[1] in codeRenderer) {
    renderer = codeRenderer[cgLang[1]];
  }
  // cg:foo な独自ブロックだが、定義されてないやつ
  else {
    renderer = codeRenderer['orig'];
  }

  return renderer.apply(this, arguments);
};


CodeGridMarkdown.prototype._initialize = function(options) {
  // TODO: _extendをなんか別のに
  this._options = util._extend(options, {
    renderer: renderer
  });
  return this;
};
CodeGridMarkdown.prototype.render = function(str) {
  return marked(str, this._options);
};
