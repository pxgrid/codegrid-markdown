'use strict';
const assert = require('node:assert/strict');
const { describe, it } = require('node:test');
const Transformer = require('../../lib/transformer');

describe('CodeGridMarkdown - Transformer', function() {


describe('#transform', function() {
  it('処理対象がないなら何もしない', function() {
    const htmlStr = '<h2 id="-1">見出し1</h2><p>てきすと</p>';
    const transformed = Transformer.transform(htmlStr);
    assert.equal(htmlStr, transformed);
  });
});


});
