'use strict';
var TOKEN_TYPES = require('./tokenizer').TOKEN_TYPES;
var MDRenderer   = require('./renderer/md');
var CGMDRenderer = require('./renderer/cgmd');

function render(token, options) {
  var retStr = '';

  var MD   = new MDRenderer(options);
  var CGMD = new CGMDRenderer(MD);

  switch (token.type) {
  case TOKEN_TYPES.MD:
    retStr += MD.render(token);
    break;
  case TOKEN_TYPES.CGMD:
    retStr += CGMD.render(token);
    break;
  }

  return retStr;
}

module.exports = {
  render: render
};
