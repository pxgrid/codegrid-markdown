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

  it('markedにオプションが渡せる', function() {
    var original = '<img>';
    var expect = '<p>&lt;img&gt;</p>\n';

    var cgmd = new CodeGridMarkdown({ sanitize: true });
    assert.equal(cgmd.render(original), expect);
  });
});

describe('#render', function() {
  var cgmd = new CodeGridMarkdown();

  it('文字列なくてもエラーにならない', function() {
    assert.doesNotThrow(function() { cgmd.render(); });
  });
  it('文字列なければ空文字列を返す', function() {
    assert.equal(cgmd.render(), '');
  });

  it('cg:note', function() {
    var noteMd   = fs.readFileSync(__dirname + '/fixture/note.md', 'utf-8');
    var noteHTML = fs.readFileSync(__dirname + '/fixture/note.html', 'utf-8');
    assert.equal(_trimSpace(cgmd.render(noteMd)), _trimSpace(noteHTML));
  });
  it('cg:column', function() {
    var columnMd   = fs.readFileSync(__dirname + '/fixture/column.md', 'utf-8');
    var columnHTML = fs.readFileSync(__dirname + '/fixture/column.html', 'utf-8');
    assert.equal(_trimSpace(cgmd.render(columnMd)), _trimSpace(columnHTML));
  });
  it('cg:imgbox', function() {
    var imgboxMd   = fs.readFileSync(__dirname + '/fixture/imgbox.md', 'utf-8');
    var imgboxHTML = fs.readFileSync(__dirname + '/fixture/imgbox.html', 'utf-8');
    assert.equal(_trimSpace(cgmd.render(imgboxMd)), _trimSpace(imgboxHTML));
  });
  it('cg:demo', function() {
    var demoMd   = fs.readFileSync(__dirname + '/fixture/demo.md', 'utf-8');
    var demoHTML = fs.readFileSync(__dirname + '/fixture/demo.html', 'utf-8');
    assert.equal(_trimSpace(cgmd.render(demoMd)), _trimSpace(demoHTML));
  });
  it('cg:jade', function() {
    var jadeMd   = fs.readFileSync(__dirname + '/fixture/jade.md', 'utf-8');
    var jadeHTML = fs.readFileSync(__dirname + '/fixture/jade.html', 'utf-8');
    assert.equal(_trimSpace(cgmd.render(jadeMd)), _trimSpace(jadeHTML));
  });
});




function _trimSpace(str) {
  return str.replace(/\s{2,}/g, '')
            .replace(/\n/g, '');
}
