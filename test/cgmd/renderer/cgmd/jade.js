'use strict';
var assert     = require('power-assert');
var renderJade =  require('../../../../lib/renderer/cgmd/jade');

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#jade', function() {
  it('レンダリングできること', function() {
    var res = renderJade('.foo foo');
    var expect = '<div class="foo">foo</div>';
    assert.equal(res, expect);
  });
});


});
