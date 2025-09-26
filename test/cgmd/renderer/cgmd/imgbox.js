'use strict';
const assert = require('node:assert/strict');
const { describe, it } = require('node:test');
const MDRenderer = require('../../../../lib/renderer/md');
const renderImgbox =  require('../../../../lib/renderer/cgmd/imgbox');
const renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#imgbox', function() {
  it('レンダリングできること', function() {
    const res = renderImgbox('foo', renderer);
    const expect = '<figure class="ImgBox">\n<p>foo</p>\n\n</figure>\n';
    assert.equal(res, expect);
  });
});


});
