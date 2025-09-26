'use strict';
const assert = require('node:assert/strict');
const { describe, it } = require('node:test');
const CGMD_Token   = require('../../../lib/tokenizer/token/cgmd');
const MDRenderer   = require('../../../lib/renderer/md');
const CGMDRenderer = require('../../../lib/renderer/cgmd');
const renderer = new CGMDRenderer(new MDRenderer());

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#renderToken', function() {
  const token = new CGMD_Token();
  token.addBody('[note]');
  token.addBody('b');
  token.addBody('[/note]');

  it('CGMD_Tokenをレンダリングできること', function() {
    const res = renderer.renderToken(token);
    const expect = '<div class="Note">\n<p>b</p>\n\n</div>\n';
    assert.equal(res, expect);
  });
});


});
