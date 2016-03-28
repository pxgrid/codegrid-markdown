'use strict';
var assert           = require('power-assert');
var CodeGridMarkdown = require('../../');

describe('CodeGridMarkdown', function() {


describe('#constructor', function() {
  it('newしなくてもエラーにならない', function() {
    /* jshint newcap: false */
    assert.doesNotThrow(function() { CodeGridMarkdown(); });
  });

  it('newしてもしなくても動作は同じ', function() {
    var testMd = '# Hi, this is test';
    /* jshint newcap: false */
    var cgmd1 = CodeGridMarkdown();
    var cgmd2 = new CodeGridMarkdown();
    assert.equal(cgmd1.render(testMd), cgmd2.render(testMd));
  });

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
