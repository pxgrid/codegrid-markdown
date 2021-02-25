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
    var tokens = Tokenizer.tokenize('[note]\n# This is cg markdown.\n[/note]');
    assert.equal(tokens.length, 1);
    assert(tokens[0].isTypeCGMD());
  });

  it('あわせてトークン化', function() {
    var tokens = Tokenizer.tokenize([
      '# This is normal markdown.\n',
      '[note]\n# This is cg markdown.\n[/note]',
      '# This is normal markdown too.\n'
    ].join('\n'));
    assert.equal(tokens.length, 3);
    assert(tokens[0].isTypeMD());
    assert(tokens[1].isTypeCGMD());
    assert(tokens[2].isTypeMD());
  });

  it('cgmdとじ忘れはエラー', function() {
    assert.throws(function() {
      Tokenizer.tokenize('[demo]\n# Forgot closing!');
    });
  });

  it('cgmdネストもエラー', function() {
    assert.throws(function() {
      Tokenizer.tokenize('[demo]\n# Nesting not allowed!\n[imgbox]');
    });
  });

  it('cgmd違うので閉じるとエラー', function() {
    assert.throws(function() {
      Tokenizer.tokenize('[imgbox]\n# Wrong closing!\n[/column]');
    });
  });

  it('cgmdの規定のタイプ以外は無視', function() {
    var tokens = Tokenizer.tokenize([
      '```toml',
      '[build]',
      '  npm run build',
      '```'
    ].join('\n'));
    assert.equal(tokens.length, 1);
    assert(tokens[0].isTypeMD());
  });

  it('cgmdの規定のタイプでも、行頭でないなら無視', function() {
    var tokens = Tokenizer.tokenize([
      '```js',
      'useEffect(',
      '  () => {',
      '    console.log(demo);',
      '  }',
      '  [demo]',
      ');',
      '```'
    ].join('\n'));
    assert.equal(tokens.length, 1);
    assert(tokens[0].isTypeMD());
  });
});


});
