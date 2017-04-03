'use strict';
var util = require('util');
var ghDiffHTML = require('gh-diff-html');
var marked = require('marked');

var CustomRenderer = (function (MarkedRenderer) {
  function CustomRenderer (options) {
    MarkedRenderer.call(this, arguments);
    this.fileName = '';
    this.diffs = [];
  }
  util.inherits(CustomRenderer, marked.Renderer);
  
  CustomRenderer.prototype.code = function(code, lang) {
    var langArr = lang.split('#');
    if (langArr.length === 2) {
      this.fileName = langArr[1]
    }
    this.diffs.push(code);
  }
  
  CustomRenderer.prototype.createDiffHTML = function() {
    var html = ghDiffHTML(this.diffs[0], this.diffs[1], {
      fileName: this.fileName
    })
    this.fileName = '';
    this.diffs = [];
    return html
  }
  
  return CustomRenderer;
})(marked.Renderer);

var template = '' +
  '<div class="diff">\n' +
  '%s\n' +
  '</div>\n';

/**
 * cg:diff をレンダリングする
 *
 * @param {string} str
 *   Markdown文字列
 * @param {object} renderer
 *   Markdownのレンダラ
 *
 */
module.exports = function(str) {
  var customRenderer = new CustomRenderer()
  marked(str, {renderer: customRenderer})
  var diff = customRenderer.createDiffHTML()
  return util.format(template, diff);
};
