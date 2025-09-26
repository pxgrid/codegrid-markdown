'use strict';
var assert = require('node:assert/strict');
var { describe, it } = require('node:test');
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
    var expect = '<div class="Note">\n<p>b</p>\n\n</div>\n';
    assert.equal(res, expect);
  });
});


});
