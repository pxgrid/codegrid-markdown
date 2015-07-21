'use strict';
var jade   = require('jade');

module.exports = function(code) {
  return jade.render(code) + '\n';
};
