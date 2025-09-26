'use strict';
const assert = require('node:assert/strict');
const { describe, it } = require('node:test');
const MDRenderer = require('../../../../lib/renderer/md');
const renderDemo =  require('../../../../lib/renderer/cgmd/demo');
const renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#demo', function() {
  it('レンダリングできること', function() {
    const res = renderDemo('<iframe src="http://example.com" data-deferred></iframe>', renderer);
    const expect = '<div class="Demo">\n<iframe src="http://example.com" data-deferred></iframe>\n</div>\n';
    assert.equal(res, expect);
  });
});


});
