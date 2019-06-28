'use strict';
var assert     = require('power-assert');
var MDRenderer = require('../../../../lib/renderer/md');
var renderColumn =  require('../../../../lib/renderer/cgmd/column');
var renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#column', function() {
  it('レンダリングできること', function() {
    var res = renderColumn('foo', renderer);
    var expect = '' +
      '<aside class="cgmd-Column">\n' +
        '<section class="cgmd-Column_Inner">\n' +
        '<p>foo</p>\n\n' +
        '</section>\n' +
      '</aside>\n';
    assert.equal(res, expect);
  });
});


});
