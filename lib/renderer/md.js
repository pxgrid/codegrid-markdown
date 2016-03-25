'use strict';
var marked = require('marked');

// なんか増えたらココに追記
var renderFunc = {
  code: require('./md/code')
};

function MDRenderer(options) {
  this.options = options;

  this.options.renderer = new marked.Renderer();
  Object.keys(renderFunc).forEach(function(key) {
    this.options.renderer[key] = renderFunc[key];
  }, this);

  return this;
}

MDRenderer.prototype = {
  constructor: MDRenderer,
  render: render
};

function render(tokenOrMdStr) {
  var body = (typeof tokenOrMdStr === 'object') ? tokenOrMdStr.body.join('\n') : tokenOrMdStr;
  return marked(body, this.options);
}

module.exports = MDRenderer;
