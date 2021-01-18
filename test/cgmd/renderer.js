'use strict';
var assert    = require('power-assert');
var Tokenizer = require('../../lib/tokenizer');
var Renderer  = require('../../lib/renderer');

describe('CodeGridMarkdown - Renderer', function() {


describe('#render', function() {
  var renderer = new Renderer();

  it('cgmdトークン', function() {
    var md   = '[note]\n# h1\n[/note]';
    var html = '' +
      '<div class="Note">\n' +
        '<h1>h1</h1>\n' +
      '\n</div>\n';
    var token = Tokenizer.tokenize(md)[0];
    assert.equal(renderer.render(token), html);
  });

  it('mdトークン', function() {
    var md   = '# h1';
    var html = '' +
      '<h1>h1</h1>\n';
    var token = Tokenizer.tokenize(md)[0];
    assert.equal(renderer.render(token), html);
  });
});


});
