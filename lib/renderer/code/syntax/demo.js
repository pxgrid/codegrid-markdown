'use strict';
var util   = require('util');
var marked = require('marked');

var template = '<div class="Demo">' +
                 '%s' +
               '</div>\n';

module.exports = function(code) {
  return util.format(template, marked(code));
};
