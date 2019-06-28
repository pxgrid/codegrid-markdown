'use strict';
var assert       = require('power-assert');
var CGMD_Token   = require('../../../lib/tokenizer/token/cgmd');
var MDRenderer   = require('../../../lib/renderer/md');
var CGMDRenderer = require('../../../lib/renderer/cgmd');
var renderer = new CGMDRenderer(new MDRenderer());

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#renderToken', function() {
  var token = new CGMD_Token();
  token.addBody('[note]');
  token.addBody('b');
  token.addBody('[/note]');

  it('CGMD_Tokenをレンダリングできること', function() {
    var res = renderer.renderToken(token);
    var expect = '<div class="cgmd-Note">\n<p>b</p>\n\n</div>\n';
    var expect = '' +
      '<aside class="cgmd-Note">\n' +
        '<section class="cgmd-Note_Inner">\n' +
        '<p>b</p>\n\n' +
        '</section>\n' +
      '</aside>\n';
    assert.equal(res, expect);
  });
});


});
