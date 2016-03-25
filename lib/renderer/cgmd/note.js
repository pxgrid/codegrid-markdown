'use strict';
var util   = require('util');
var marked = require('marked');

module.exports = Note;


function Note(options) {
  this.options = options;
}

Note.template = '<div class="Note">' +
                  '%s' +
                '</div>\n';

Note.prototype = {
  constructor: Note,
  render: render
};

/**
 * cg:note をレンダリングする
 *
 * @param {String} str
 *     Markdown文字列
 *
 */
function render(str) {
  return util.format(this.constructor.template, marked(str, this.options));
}
