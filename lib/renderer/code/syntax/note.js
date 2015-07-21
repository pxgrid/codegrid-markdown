'use strict';
var marked = require('marked');

module.exports = function(code) {
  return '<div class="Note">' + marked(code) + '</div>';
};
