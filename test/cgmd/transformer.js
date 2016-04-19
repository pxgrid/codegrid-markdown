'use strict';
var assert      = require('power-assert');
var Transformer = require('../../lib/transformer');

describe('CodeGridMarkdown - Transformer', function() {


describe('#transform', function() {
  it('処理対象がないなら何もしない', function() {
    var htmlStr = '<h2 id="-1">見出し1</h2><p>てきすと</p>';
    var transformed = Transformer.transform(htmlStr);
    assert.equal(htmlStr, transformed);
  });
});


});
