'use strict';
var assert     = require('power-assert');
var MDRenderer = require('../../../../lib/renderer/md');
var renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - md', function() {


describe('#code', function() {
  it('言語指定がない場合はmarked標準', function() {
    var html = renderer.render('```\nhoge\n```');
    var expect = '<pre><code>hoge\n</code></pre>';
    assert.equal(html, expect);
  });
  it('言語指定だけある場合もmarked標準', function() {
    var html = renderer.render('```html\nhoge\n```');
    var expect = '<pre><code class="lang-html">hoge\n</code></pre>\n';
    assert.equal(html, expect);
  });
  it('タイトル指定が雑な場合もmarked標準', function() {
    var html = renderer.render('```html#\nhoge\n```');
    var expect = '<pre><code class="lang-html">hoge\n</code></pre>\n';
    assert.equal(html, expect);
  });
  it('言語とタイトル指定が正しい場合は拡張したやつ', function() {
    var html = renderer.render('```html#title\nhoge\n```');
    var expect = '' +
      '<div class="Code">\n' +
        '<div class="Code__title">title</div>\n' +
        '<div class="Code__body">' +
        '<pre><code class="lang-html">hoge\n</code></pre>\n' +
        '</div>\n' +
      '</div>\n';
    assert.equal(html, expect);
  });
});


});
