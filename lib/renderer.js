'use strict';

var TOKEN_TYPES = require('./tokenizer').TOKEN_TYPES;

var MDRenderer   = require('./renderer/md');
var CGMDRenderer = require('./renderer/cgmd');

module.exports = {
  render: render
};


function render(token, options) {
  var retStr = '';

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
