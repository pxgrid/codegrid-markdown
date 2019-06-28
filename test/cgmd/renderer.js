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
      '<aside class="cgmd-Note">\n' +
        '<section class="cgmd-Note_Inner">\n' +
          '<h1 id="h1">h1</h1>\n\n' +
        '</section>\n' +
      '</aside>\n';
    var token = Tokenizer.tokenize(md)[0];
    assert.equal(renderer.render(token), html);
  });

  it('mdトークン', function() {
    var md   = '# h1';
    var html = '' +
      '<h1 id="h1">h1</h1>\n';
    var token = Tokenizer.tokenize(md)[0];
    assert.equal(renderer.render(token), html);
  });
});


});
