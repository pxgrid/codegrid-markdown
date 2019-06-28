'use strict';
var assert      = require('power-assert');
var Transformer = require('../../../lib/transformer');

describe('CodeGridMarkdown - Transformer - Demo', function() {


describe('#demo', function() {
  it('レンダリングされること: クリックして再生', function() {
    var res = Transformer.transform('<div class="cgmd-Demo">\n<h1>タイトル</h1>\n<iframe data-src="http://example.com" data-deferred="true"></iframe>\n</div>\n');
    var expect = '' +
      '<section class="cgmd-Livecode" data-livecode-deferred>\n' +
        '<div class="cgmd-Livecode_Inner">\n' +
          '<header class="cgmd-Livecode_Header">\n' +
            '<h1 class="cgmd-Livecode_Label">タイトル</h1>\n' +
            '<nav class="cgmd-Livecode_Nav">\n' +
              '<ul>' +
              '<li><a href="http://example.com" target="_blank">新規タブで開く</a></li>' +
              '</ul>\n' +
            '</nav>\n' +
          '</header>\n' +
          '<div class="cgmd-Livecode_Body"><iframe data-src="http://example.com" data-deferred="true"></iframe></div>\n' +
        '</div>\n' +
      '</section>\n';

    assert.equal(res, expect);
  });

  it('レンダリングされること: そのままのデモ', function() {
    var res = Transformer.transform('<div class="cgmd-Demo">\n<h1>タイトル</h1>\n<iframe src="http://example.com"></iframe>\n</div>\n');
    var expect = '' +
      '<section class="cgmd-Livecode">\n' +
        '<div class="cgmd-Livecode_Inner">\n' +
          '<header class="cgmd-Livecode_Header">\n' +
            '<h1 class="cgmd-Livecode_Label">タイトル</h1>\n' +
            '<nav class="cgmd-Livecode_Nav">\n' +
              '<ul>' +
              '<li><a href="http://example.com" target="_blank">新規タブで開く</a></li>' +
              '</ul>\n' +
            '</nav>\n' +
          '</header>\n' +
          '<div class="cgmd-Livecode_Body"><iframe src="http://example.com"></iframe></div>\n' +
        '</div>\n' +
      '</section>\n';
    assert.equal(res, expect);
  });

  it('レンダリングされること: ソースコードあり', function() {
    var res = Transformer.transform('<div class="cgmd-Demo">\n<h1>タイトル</h1>\n<a href="http://example.com">ソースコード</a>\n<iframe src="http://example.com"></iframe>\n</div>\n');
    var expect = '' +
      '<section class="cgmd-Livecode">\n' +
        '<div class="cgmd-Livecode_Inner">\n' +
          '<header class="cgmd-Livecode_Header">\n' +
            '<h1 class="cgmd-Livecode_Label">タイトル</h1>\n' +
            '<nav class="cgmd-Livecode_Nav">\n' +
              '<ul>' +
              '<li><a href="http://example.com" target="_blank">ソースコード</a></li>' +
              '<li><a href="http://example.com" target="_blank">新規タブで開く</a></li>' +
              '</ul>\n' +
            '</nav>\n' +
          '</header>\n' +
          '<div class="cgmd-Livecode_Body"><iframe src="http://example.com"></iframe></div>\n' +
        '</div>\n' +
      '</section>\n';
    assert.equal(res, expect);
  });
});

});
