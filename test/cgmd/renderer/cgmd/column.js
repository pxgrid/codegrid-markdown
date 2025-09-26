'use strict';
const assert = require('node:assert/strict');
const { describe, it } = require('node:test');
const MDRenderer = require('../../../../lib/renderer/md');
const renderColumn =  require('../../../../lib/renderer/cgmd/column');
const renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#column', function() {
  it('レンダリングできること', function() {
    const res = renderColumn('foo', renderer);
    const expect = '<div class="Column">\n<p>foo</p>\n\n</div>\n';
    assert.equal(res, expect);
  });
});


});
