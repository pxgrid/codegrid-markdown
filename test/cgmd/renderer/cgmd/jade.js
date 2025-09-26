'use strict';
const assert = require('node:assert/strict');
const { describe, it } = require('node:test');
const renderJade =  require('../../../../lib/renderer/cgmd/jade');

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#jade', function() {
  it('レンダリングできること', function() {
    const res = renderJade('.foo foo');
    const expect = '<div class="foo">foo</div>';
    assert.equal(res, expect);
  });
});


});
