'use strict';
var assert = require('node:assert/strict');
var { describe, it } = require('node:test');
var MDRenderer = require('../../../../lib/renderer/md');
var renderImgbox =  require('../../../../lib/renderer/cgmd/imgbox');
var renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#imgbox', function() {
  it('レンダリングできること', function() {
    var res = renderImgbox('foo', renderer);
    var expect = '<figure class="ImgBox">\n<p>foo</p>\n\n</figure>\n';
    assert.equal(res, expect);
  });
});


});
