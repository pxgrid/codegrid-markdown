'use strict';
var assert     = require('power-assert');
var MDRenderer = require('../../../../lib/renderer/md');
var renderColumn =  require('../../../../lib/renderer/cgmd/column');
var renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#column', function() {
  it('レンダリングできること', function() {
    var res = renderColumn('foo', renderer);
    var expect = '<div class="Column">\n<p>foo</p>\n\n</div>\n';
    assert.equal(res, expect);
  });
});


});
