import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import MD_Token from '../../../lib/tokenizer/token/md.js';

describe('CodeGridMarkdown - Token - MD', function() {


describe('#constructor', function() {
  const token = new MD_Token();

  it('type', function() {
    assert(token.isTypeMD() === true);
    assert(token.isTypeCGMD() === false);
  });
});

describe('#getBody', function() {
  const token = new MD_Token();
  token.addBody('a');
  token.addBody('b');
  token.addBody('c');

  it('本文が取れること', function() {
    assert.equal(token.getBody(), 'a\nb\nc');
  });
});
});
