'use strict';
var assert      = require('power-assert');
var Transformer = require('../../../lib/transformer');

describe('CodeGridMarkdown - Transformer - Demo', function() {


describe('#demo', function() {
  it('レンダリングされること', function() {
    var res = Transformer.transform('<div class="Demo">\n<h1>タイトル</h1>\n<iframe src="http://example.com" data-deferred></iframe>\n</div>\n');
    var expect = '<div class="CG2-livecode" data-livecode-deferred=""><header class="CG2-livecode__header"><div class="CG2-livecode__label">タイトル</div><div class="CG2-livecode__nav"><ul><li><a href="http://example.com" target="_blank"><span class="CG2-icon-tool"></span> 新規タブで開く</a></li></ul></div></header><div class="CG2-livecode__body"><iframe src="http://example.com" data-deferred=""></iframe></div></div>\n';
    assert.equal(res, expect);
  });
});


});
