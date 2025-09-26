'use strict';
const assert = require('node:assert/strict');
const { describe, it } = require('node:test');
const MD_Token = require('../../../lib/tokenizer/token/md');

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
