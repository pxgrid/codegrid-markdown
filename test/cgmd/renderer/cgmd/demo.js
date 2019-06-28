'use strict';
var assert     = require('power-assert');
var MDRenderer = require('../../../../lib/renderer/md');
var renderDemo =  require('../../../../lib/renderer/cgmd/demo');
var renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#demo', function() {
  it('レンダリングできること', function() {
    var res = renderDemo('<iframe src="http://example.com" data-deferred></iframe>', renderer);
    var expect = '<div class="cgmd-Demo">\n<iframe src="http://example.com" data-deferred></iframe>\n</div>\n';
    assert.equal(res, expect);
  });
});


});
