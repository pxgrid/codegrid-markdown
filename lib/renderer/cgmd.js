'use strict';
var utils = require('../utils');

// 独自記法が増えたらココを増やす
var CGMDRenderer = {
  note:   require('./cgmd/note'),
  column: require('./cgmd/column'),
  imgbox: require('./cgmd/imgbox'),
  demo:   require('./cgmd/demo'),
  jade:   require('./cgmd/jade'),
  code:   require('./cgmd/code')
};

module.exports = {
  render: render
};


function render(token, options) {
  var cap = utils.captureAllRe('(?:\:([a-z]+))', token.body[0]);
  var body = token.body.slice(1, -1).join('\n');

  var syntax = cap.shift();
  if (syntax in CGMDRenderer === false) {
    throw new Error('Undefined syntax' + syntax);
  }

  return (new CGMDRenderer[syntax](options)).render(body, cap);
}
