'use strict';
// var fs               = require('fs');
var assert           = require('power-assert');
var CodeGridMarkdown = require('../');

describe('CodeGridMarkdownのテスト', function() {


describe('#constructor', function() {
  it('newしなくてもエラーにならない', function() {
    /* jshint newcap: false */
    assert.doesNotThrow(function() { CodeGridMarkdown(); });
  });

  var testMd = '# Hi, this is test';
  it('newしてもしなくても動作は同じ', function() {
    /* jshint newcap: false */
    var cgmd1 = CodeGridMarkdown();
    var cgmd2 = new CodeGridMarkdown();
    assert.equal(cgmd1.render(testMd), cgmd2.render(testMd));
  });

  it('markedにオプションが渡せる', function() {
  });
});


});
