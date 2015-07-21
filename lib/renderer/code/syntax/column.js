'use strict';
var marked = require('marked');

module.exports = function(code) {
  return '<div class="Column">' + marked(code) + '</div>';
};
