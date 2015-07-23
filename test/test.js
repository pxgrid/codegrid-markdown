'use strict';
var fs               = require('fs');
var assert           = require('power-assert');
var CodeGridMarkdown = require('../index');

describe('#constructor', function() {
  it('newしなくてもエラーにならない', function() {
    assert.doesNotThrow(function() { CodeGridMarkdown(); });
  });

  var testMd = '# Hi, this is test';
  it('newしてもしなくても動作は同じ', function() {
    var cgmd1 = CodeGridMarkdown();
    var cgmd2 = new CodeGridMarkdown();
    assert.equal(cgmd1.render(testMd), cgmd2.render(testMd));
  });
});

describe('#render', function() {
  var cgmd = new CodeGridMarkdown();

  it('cg:note', function() {
    var noteMd   = fs.readFileSync(__dirname + '/fixture/note.md', 'utf-8');
    var noteHTML = fs.readFileSync(__dirname + '/fixture/note.html', 'utf-8');
    assert.equal(_trimSpace(cgmd.render(noteMd)), _trimSpace(noteHTML));
  });
});




function _trimSpace(str) {
  return str.replace(/\s{2,}/g, '')
            .replace(/\n/g, '');
}
