'use strict';
var assert     = require('power-assert');
var MDRenderer = require('../../../../lib/renderer/md');
var renderImgbox =  require('../../../../lib/renderer/cgmd/imgbox');
var renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#imgbox', function() {
  it('レンダリングできること', function() {
    var res = renderImgbox('foo', renderer);
    var expect = '<div class="ImgBox">\n<p>foo</p>\n\n</div>\n';
    assert.equal(res, expect);
  });
});


});
