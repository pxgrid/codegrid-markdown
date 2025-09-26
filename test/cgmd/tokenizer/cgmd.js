import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import CGMD_Token from '../../../lib/tokenizer/token/cgmd.js';

describe('CodeGridMarkdown - Token - CGMD', function() {


describe('#constructor', function() {
  const token = new CGMD_Token();

  it('type', function() {
    assert(token.isTypeCGMD() === true);
    assert(token.isTypeMD() === false);
  });
});
describe('#getCGSyntax', function() {
  const token = new CGMD_Token();
  token.addBody('[note]');
  token.addBody('a');
  token.addBody('[/note]');

  it('シンタックスが取れること', function() {
    assert.equal(token.getCGSyntax(), 'note');
  });
});

describe('#getBody', function() {
  const token = new CGMD_Token();
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
