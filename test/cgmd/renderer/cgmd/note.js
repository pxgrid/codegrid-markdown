'use strict';
var assert = require('node:assert/strict');
var { describe, it } = require('node:test');
var MDRenderer = require('../../../../lib/renderer/md');
var renderNote =  require('../../../../lib/renderer/cgmd/note');
var renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#note', function() {
  it('レンダリングできること', function() {
    var res = renderNote('foo', renderer);
    var expect = '<div class="Note">\n<p>foo</p>\n\n</div>\n';
    assert.equal(res, expect);
  });
});


});
