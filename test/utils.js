'use strict';
var assert = require('power-assert');
var utils = require('../lib/utils');

describe('utilsのテスト', function() {


describe('#escapeHtml', function() {
  var html = '<div id="id">TEST&TEST</div>';
  var escaped = '&lt;div id=&quot;id&quot;&gt;TEST&amp;TEST&lt;/div&gt;';

  it('エスケープされること', function() {
    assert.equal(utils.escapeHtml(html), escaped);
  });
  it('XXX: エスケープされること・・？(第二引数の意味がいまいちわかってない)', function() {
    assert.equal(utils.escapeHtml(html, true), escaped);
  });
});

describe('#getCodeBodyWithCustomCodeRenderer', function() {
  var md = '```html\n<div id="id">TEST&TEST</div>\n```';
  var str = '<pre class="code html">&lt;div id=&quot;id&quot;&gt;TEST&amp;TEST&lt;/div&gt;\n</pre>\n';

  it('独自のpreコードブロックがパースされること', function() {
    assert.equal(utils.getCodeBodyWithCustomCodeRenderer(md), str);
  });
});


});
