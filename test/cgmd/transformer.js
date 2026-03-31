import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Transformer from '../../lib/transformer.js';

describe('CodeGridMarkdown - Transformer', function() {


describe('#transform', function() {
  it('処理対象がないなら何もしない', function() {
    const htmlStr = '<h2 id="-1">見出し1</h2><p>てきすと</p>';
    const transformed = Transformer.transform(htmlStr);
    assert.equal(htmlStr, transformed);
  });
});
});
