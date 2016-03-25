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

function CGMDRenderer(MDRenderer) {
  this.MDRenderer = MDRenderer;

  return this;
}

CGMDRenderer.prototype = {
  constructor: CGMDRenderer,
  render: render
};

function render(token) {
  // [cg:foo:bar] -> [foo, bar]
  var cap = utils.captureAllRe('(?:\:([a-z]+))', token.body[0]);
  // [cg:**] と [/cg] の行はいらなくて、その間が欲しい
  var body = token.body.slice(1, -1).join('\n');

  var syntax = cap.shift();
  if (syntax in renderFunc === false) {
    throw new Error('Undefined syntax' + syntax);
  }

  return renderFunc[syntax](body, this.MDRenderer);
}

module.exports = CGMDRenderer;
