'use strict';
const assert = require('node:assert/strict');
const { describe, it } = require('node:test');
const CodeGridMarkdown = require('../../');

describe('CodeGridMarkdown', function() {


describe('#constructor', function() {
  it('markedにオプションが渡せる', function() {
    const original = '<img>';
    const expect = '<p>&lt;img&gt;</p>\n';

    const cgmd = new CodeGridMarkdown({ sanitize: true });
    assert.equal(cgmd.render(original), expect);
  });
});

describe('#render', function() {
  it('空文字投げてもエラーにならない', function() {
    const cgmd = new CodeGridMarkdown();
    assert.doesNotThrow(function() { cgmd.render(); });
    assert.doesNotThrow(function() { cgmd.render(''); });
  });
});


});
