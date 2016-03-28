'use strict';
var assert    = require('power-assert');
var Tokenizer = require('../../lib/tokenizer');

describe('CodeGridMarkdown - Tokenizer', function() {


describe('#tokenize', function() {
  it('空文字投げてもエラーにならない', function() {
    assert.doesNotThrow(function() { Tokenizer.tokenize(''); });
  });
  it('空文字投げたら空配列', function() {
    assert.deepEqual(Tokenizer.tokenize(''), []);
  });

  it('mdとしてトークン化', function() {
    var tokens = Tokenizer.tokenize('# This is normal markdown.');
    assert.equal(tokens.length, 1);
    assert(tokens[0].isTypeMD());
  });

  it('cgmdとしてトークン化', function() {
    var tokens = Tokenizer.tokenize('[cg:note]\n# This is cg markdown.\n[/cg]');
    assert.equal(tokens.length, 1);
    assert(tokens[0].isTypeCGMD());
  });

  it('あわせてトークン化', function() {
    var tokens = Tokenizer.tokenize([
      '# This is normal markdown.\n',
      '[cg:note]\n# This is cg markdown.\n[/cg]',
      '# This is normal markdown too.\n'
    ].join('\n'));
    assert.equal(tokens.length, 3);
    assert(tokens[0].isTypeMD());
    assert(tokens[1].isTypeCGMD());
    assert(tokens[2].isTypeMD());
  });

  it('cgmdとじ忘れはエラー', function() {
    assert.throws(function() {
      Tokenizer.tokenize('[cg:note]\n# Forgot closing!');
    });
  });
});


});
