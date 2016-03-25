'use strict';
var TOKEN_TYPES = require('./tokenizer').TOKEN_TYPES;
var MDRenderer   = require('./renderer/md');
var CGMDRenderer = require('./renderer/cgmd');

function Renderer(options) {
  this.MD   = new MDRenderer(options);
  this.CGMD = new CGMDRenderer(new MDRenderer(options));

  return this;
}

Renderer.prototype = {
  constructor: Renderer,
  render: render
};

function render(token) {
  var retStr = '';

  switch (token.type) {
  case TOKEN_TYPES.MD:
    retStr += this.MD.render(token);
    break;
  case TOKEN_TYPES.CGMD:
    retStr += this.CGMD.render(token);
    break;
  }

  return retStr;
}

module.exports = Renderer;
