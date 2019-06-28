'use strict';
var assert     = require('power-assert');
var MDRenderer = require('../../../../lib/renderer/md');
var renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - md', function() {


describe('#code', function() {
  it('言語指定がない場合の拡張したやつ', function() {
    var html = renderer.render('```\nhoge\n```');
    var expect = '<pre><code>hoge\n</code></pre>';
    var expect = '' +
      '<figure class="cgmd-Code">\n' +
        '<div class="cgmd-Code_Inner">\n' +
          '<div class="cgmd-Code_Body"><pre><code>hoge\n</code></pre></div>\n' +
        '</div>\n' +
      '</figure>\n';
    assert.equal(html, expect);
  });
  it('言語指定だけある場合の拡張したやつ', function() {
    var html = renderer.render('```html\nhoge\n```');
    var expect = '' +
      '<figure class="cgmd-Code">\n' +
        '<div class="cgmd-Code_Inner">\n' +
          '<figcaption class="cgmd-Code_Header">\n' +
            '<span class="cgmd-Code_Lang">html</span>\n' +
          '</figcaption>\n' +
          '<div class="cgmd-Code_Body"><pre><code class="lang-html">hoge\n</code></pre>\n</div>\n' +
        '</div>\n' +
      '</figure>\n';
    assert.equal(html, expect);
  });
  it('タイトル指定が雑な場合の拡張したやつ', function() {
    var html = renderer.render('```html#\nhoge\n```');
    var expect = '' +
      '<figure class="cgmd-Code">\n' +
        '<div class="cgmd-Code_Inner">\n' +
          '<figcaption class="cgmd-Code_Header">\n' +
            '<span class="cgmd-Code_Lang">html</span>\n' +
          '</figcaption>\n' +
          '<div class="cgmd-Code_Body"><pre><code class="lang-html">hoge\n</code></pre>\n</div>\n' +
        '</div>\n' +
      '</figure>\n';
    assert.equal(html, expect);
  });
  it('言語とタイトル指定が正しい場合は拡張したやつ', function() {
    var html = renderer.render('```html#title\nhoge\n```');
    var expect = '' +
      '<figure class="cgmd-Code">\n' +
        '<div class="cgmd-Code_Inner">\n' +
          '<figcaption class="cgmd-Code_Header">\n' +
            '<span class="cgmd-Code_Title">title</span>\n' +
            '<span class="cgmd-Code_Lang">html</span>\n' +
          '</figcaption>\n' +
          '<div class="cgmd-Code_Body">' +
            '<pre><code class="lang-html">hoge\n</code></pre>\n' +
          '</div>\n' +
        '</div>\n' +
      '</figure>\n';

    assert.equal(html, expect);
  });
});


});
