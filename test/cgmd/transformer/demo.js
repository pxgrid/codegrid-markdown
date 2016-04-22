'use strict';
var assert      = require('power-assert');
var Transformer = require('../../../lib/transformer');

describe('CodeGridMarkdown - Transformer - Demo', function() {


describe('#demo', function() {
  it('レンダリングされること: クリックして再生', function() {
    var res = Transformer.transform('<div class="Demo">\n<h1>タイトル</h1>\n<iframe data-src="http://example.com" data-deferred="true"></iframe>\n</div>\n');
    var expect = '<div class="CG2-livecode" data-livecode-deferred=""><header class="CG2-livecode__header"><div class="CG2-livecode__label">タイトル</div><div class="CG2-livecode__nav"><ul><li><a href="http://example.com">新規タブで開く</a></li></ul></div></header><div class="CG2-livecode__body"><iframe data-src="http://example.com" data-deferred="true"></iframe></div></div>\n';
    assert.equal(res, expect);
  });

  it('レンダリングされること: そのままのデモ', function() {
    var res = Transformer.transform('<div class="Demo">\n<h1>タイトル</h1>\n<iframe src="http://example.com"></iframe>\n</div>\n');
    var expect = '<div class="CG2-livecode"><header class="CG2-livecode__header"><div class="CG2-livecode__label">タイトル</div><div class="CG2-livecode__nav"><ul><li><a href="http://example.com">新規タブで開く</a></li></ul></div></header><div class="CG2-livecode__body"><iframe src="http://example.com"></iframe></div></div>\n';
    assert.equal(res, expect);
  });

  it('レンダリングされること: ソースコードあり', function() {
    var res = Transformer.transform('<div class="Demo">\n<h1>タイトル</h1>\n<a href="http://example.com">ソースコード</a>\n<iframe src="http://example.com"></iframe>\n</div>\n');
    var expect = '<div class="CG2-livecode"><header class="CG2-livecode__header"><div class="CG2-livecode__label">タイトル</div><div class="CG2-livecode__nav"><ul><li><a href="http://example.com">ソースコード</a></li><li><a href="http://example.com">新規タブで開く</a></li></ul></div></header><div class="CG2-livecode__body"><iframe src="http://example.com"></iframe></div></div>\n';
    assert.equal(res, expect);
  });
});

});
