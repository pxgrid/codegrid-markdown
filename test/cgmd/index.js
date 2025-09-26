'use strict';
var assert = require('node:assert/strict');
var { describe, it } = require('node:test');
var CodeGridMarkdown = require('../../');

describe('CodeGridMarkdown', function() {


describe('#constructor', function() {
  it('markedにオプションが渡せる', function() {
    var original = '<img>';
    var expect = '<p>&lt;img&gt;</p>\n';

    var cgmd = new CodeGridMarkdown({ sanitize: true });
    assert.equal(cgmd.render(original), expect);
  });
});

describe('#render', function() {
  it('空文字投げてもエラーにならない', function() {
    var cgmd = new CodeGridMarkdown();
    assert.doesNotThrow(function() { cgmd.render(); });
    assert.doesNotThrow(function() { cgmd.render(''); });
  });
});


});
