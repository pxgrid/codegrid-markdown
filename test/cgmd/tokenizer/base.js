import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Token from '../../../lib/tokenizer/token/base.js';
import TOKEN_TYPES from '../../../lib/tokenizer/token_types.js';

describe('CodeGridMarkdown - Token - Base', function() {


describe('#constructor', function() {
  it('type必須', function() {
    assert.throws(function() {
      new Token();
    });
    assert.doesNotThrow(function() {
      new Token(TOKEN_TYPES.MD);
    });
  });
});
describe('#addBody', function() {
  const token = new Token(TOKEN_TYPES.MD);

  it('本文が足せること', function() {
    const bodyLen = token.body.length;
    token.addBody('foo');

    assert.notEqual(bodyLen, token.body.length);
    assert.equal(token.body.length, 1);
  });
});

describe('#isTypeMD', function() {
  it('正しく動くこと', function() {
    const token = new Token(TOKEN_TYPES.MD);
    assert(token.isTypeMD() === true);
    assert(token.isTypeCGMD() === false);
  });
});

describe('#isTypeCGMD', function() {
  it('正しく動くこと', function() {
    const token = new Token(TOKEN_TYPES.CGMD);
    assert(token.isTypeCGMD() === true);
    assert(token.isTypeMD() === false);
  });
});


});
