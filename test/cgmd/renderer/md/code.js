import assert from 'node:assert';
import { describe, it } from 'node:test';
import MDRenderer from '../../../../lib/renderer/md.js';

const renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - md', function() {


describe('#code', function() {
  it('言語指定がない場合はmarked標準', function() {
    const html = renderer.render('```\nhoge\n```');
    const expect = '<pre><code>hoge\n</code></pre>\n';
    assert(html === expect);
  });
  it('言語指定だけある場合もmarked標準', function() {
    const html = renderer.render('```html\nhoge\n```');
    const expect = '<pre><code class="language-html">hoge\n</code></pre>\n';
    assert(html === expect);
  });
  it('タイトル指定が雑な場合もmarked標準', function() {
    const html = renderer.render('```html#\nhoge\n```');
    const expect = '<pre><code class="language-html">hoge\n</code></pre>\n';
    assert(html === expect);
  });
  it('言語とタイトル指定が正しい場合は拡張したやつ', function() {
    const html1 = renderer.render('```html#title\nhoge\n```');
    // スペースがあっても気にしない
    const html2 = renderer.render('```html #title\nhoge\n```');
    const expect = '' +
      '<section class="CG2-livecode">\n' +
        '<header class="CG2-livecode__header">\n' +
          '<div class="CG2-livecode__label">title</div>\n' +
        '</header>\n' +
        '<div class="CG2-livecode__body">' +
          '<pre><code class="language-html">hoge\n</code></pre>\n' +
        '</div>\n' +
      '</section>\n';
    assert(html1 === expect);
    assert(html2 === expect);
  });
  it('タイトルにHTML特殊文字が含まれる場合はエスケープされる', function() {
    const html = renderer.render('```html#<template>の使い方\nhoge\n```');
    const expect = '' +
      '<section class="CG2-livecode">\n' +
        '<header class="CG2-livecode__header">\n' +
          '<div class="CG2-livecode__label">&lt;template&gt;の使い方</div>\n' +
        '</header>\n' +
        '<div class="CG2-livecode__body">' +
          '<pre><code class="language-html">hoge\n</code></pre>\n' +
        '</div>\n' +
      '</section>\n';
    assert(html === expect, `expected escaped HTML, got: ${html}`);
  });
});
});
