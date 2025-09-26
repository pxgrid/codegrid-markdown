'use strict';
const assert = require('node:assert/strict');
const { describe, it } = require('node:test');
const MDRenderer = require('../../../../lib/renderer/md');
const renderNote =  require('../../../../lib/renderer/cgmd/note');
const renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#note', function() {
  it('レンダリングできること', function() {
    const res = renderNote('foo', renderer);
    const expect = '<div class="Note">\n<p>foo</p>\n\n</div>\n';
    assert.equal(res, expect);
  });
});


});
