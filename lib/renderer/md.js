'use strict';
var marked = require('marked');

module.exports = {
  render: render
};


function render(token, options) {
  return marked(token.body.join('\n'), options);
}
