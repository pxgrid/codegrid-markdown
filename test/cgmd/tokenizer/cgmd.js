'use strict';
var assert = require('node:assert/strict');
var { describe, it } = require('node:test');
var CGMD_Token = require('../../../lib/tokenizer/token/cgmd');

describe('CodeGridMarkdown - Token - CGMD', function() {


describe('#constructor', function() {
  var token = new CGMD_Token();

  it('type', function() {
    assert(token.isTypeCGMD() === true);
    assert(token.isTypeMD() === false);
  });
});

describe('#getCGSyntax', function() {
  var token = new CGMD_Token();
  token.addBody('[note]');
  token.addBody('a');
  token.addBody('[/note]');

  it('シンタックスが取れること', function() {
    assert.equal(token.getCGSyntax(), 'note');
  });
});

describe('#getBody', function() {
  var token = new CGMD_Token();
  token.addBody('[note]');
  token.addBody('a');
  token.addBody('b');
  token.addBody('c');
  token.addBody('[/note]');

  it('本文が取れること', function() {
    assert.equal(token.getBody(), 'a\nb\nc');
  });
});

});
