'use strict';
var utils = require('../utils');

// mdレベルでの独自記法が増えたらココを増やす
var renderFunc = {
  note:   require('./cgmd/note'),
  column: require('./cgmd/column'),
  imgbox: require('./cgmd/imgbox'),
  demo:   require('./cgmd/demo'),
  jade:   require('./cgmd/jade')
};

/**
 * CG flavored Markdownをレンダリングする
 * `renderFunc`に定義されてるものを拡張してある
 *
 * @param {object} MDRenderer
 *   CGな中でもふつうのMarkdown部分をレンダリングするレンダラ
 *
 */
function CGMDRenderer(MDRenderer) {
  this.MDRenderer = MDRenderer;

  return this;
}

CGMDRenderer.prototype = {
  constructor: CGMDRenderer,
  renderToken: renderToken
};

module.exports = CGMDRenderer;


/**
 * トークンをレンダリングした結果を返す
 *
 * @param {object} token
 *   各トークンのインスタンス
 * @return {string}
 *   HTML文字列
 *
 */
function renderToken(token) {
  // [cg:foo:bar] -> [foo, bar]
  var cap = utils.captureAllRe('(?:\:([a-z]+))', token.body[0]);
  var body = token.getBody();

  var syntax = cap.shift();
  if (syntax in renderFunc === false) {
    throw new Error('Undefined syntax' + syntax);
  }

  return renderFunc[syntax](body, this.MDRenderer);
}
