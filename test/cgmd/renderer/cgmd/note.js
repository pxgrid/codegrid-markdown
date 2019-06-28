'use strict';
var assert     = require('power-assert');
var MDRenderer = require('../../../../lib/renderer/md');
var renderNote =  require('../../../../lib/renderer/cgmd/note');
var renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#note', function() {
  it('レンダリングできること', function() {
    var res = renderNote('foo', renderer);
    var expect = '' +
      '<aside class="cgmd-Note">\n' +
        '<section class="cgmd-Note_Inner">\n' +
        '<p>foo</p>\n\n' +
        '</section>\n' +
      '</aside>\n';
    assert.equal(res, expect);
  });
});


});
