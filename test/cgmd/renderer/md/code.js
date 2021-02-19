'use strict';
var assert     = require('power-assert');
var MDRenderer = require('../../../../lib/renderer/md');
var renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - md', function() {


describe('#code', function() {
  it('言語指定がない場合はmarked標準', function() {
    var html = renderer.render('```\nhoge\n```');
    var expect = '<pre><code>hoge</code></pre>\n';
    assert.equal(html, expect);
  });
  it('言語指定だけある場合もmarked標準', function() {
    var html = renderer.render('```html\nhoge\n```');
    var expect = '<pre><code class="lang-html">hoge</code></pre>\n';
    assert.equal(html, expect);
  });
  it('タイトル指定が雑な場合もmarked標準', function() {
    var html = renderer.render('```html#\nhoge\n```');
    var expect = '<pre><code class="lang-html">hoge</code></pre>\n';
    assert.equal(html, expect);
  });
  it('言語とタイトル指定が正しい場合は拡張したやつ', function() {
    var html1 = renderer.render('```#title\nhoge\n```');
    var expect = '' +
      '<section class="CG2-livecode">\n' +
        '<header class="CG2-livecode__header">\n' +
          '<div class="CG2-livecode__label">title</div>\n' +
        '</header>\n' +
        '<div class="CG2-livecode__body">' +
          '<pre><code>hoge</code></pre>\n' +
        '</div>\n' +
      '</section>\n';
    assert.equal(html1, expect);
  });
  it('言語とタイトル指定が正しい場合は拡張したやつ', function() {
    var html1 = renderer.render('```html#title\nhoge\n```');
    // スペースがあっても気にしない
    var html2 = renderer.render('```html #title\nhoge\n```');
    var expect = '' +
      '<section class="CG2-livecode">\n' +
        '<header class="CG2-livecode__header">\n' +
          '<div class="CG2-livecode__label">title</div>\n' +
        '</header>\n' +
        '<div class="CG2-livecode__body">' +
          '<pre><code class="lang-html">hoge</code></pre>\n' +
        '</div>\n' +
      '</section>\n';
    assert.equal(html1, expect);
    assert.equal(html2, expect);
  });
});


});
